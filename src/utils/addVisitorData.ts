import { v4 as uuidv4 } from "uuid";
import { Visits } from "../Types/Project-type";
import supabase from "../config/supabase";

export const getDeviceType = (device: string): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(device)) return "Tablet";

  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(device,)
  ) return "Mobile";

  return "Desktop";
};

const getBrowserName = (): string => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("SamsungBrowser")) return "Samsung Browser";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";

  return "Unknown";
};

const getDeviceName = (): string => {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "Apple Device";
  if (/Android/.test(ua)) {
    const match = ua.match(/\(([^;]+);/);
    return match ? match[1] : "Android Device";
  }
  if (/Windows/.test(ua)) return "Windows PC";
  if (/Macintosh/.test(ua)) return "Mac";
  if (/Linux/.test(ua)) return "Linux PC";
  return "Unknown Device";
};

export const getLocation = async () => {
  const res = await fetch("https://ipapi.co/json/")
  const data = await res.json()
  console.log(data);
  
  return {
    city: data.city,           // "Antananarivo"
    country: data.country_name, // "Madagascar"
    ip: data.ip,               // "197.x.x.x"
  }
}

export const trackVisit = async () => {
  const sessionId = uuidv4();
  const startTime = Date.now();
  const {city, ip, country} = await getLocation()

  console.log("debut du script");
  const visitorData: Visits = {
    session_id: sessionId,
    page_path: window.location.pathname,
    userAgent: navigator.userAgent,
    country: country,
    duration: 0,
    language: navigator.language,
    city: city,
    screen: `${screen.width}x${screen.height}`,
    ip: ip,
    created_at: new Date().toISOString(),
  };

  try {
    // Insertion initiale au début de la visite
    const { error: insertError } = await supabase
      .from("visitors")
      .insert([visitorData]);

    if (insertError) {
      console.error("Error tracking visit (initial):", insertError);
      return;
    }

    console.log("ajout du data initial fait");

    // Fonction pour mettre à jour la durée au départ
    const updateDuration = async () => {
      const endTime = Date.now();
      const durationMs = endTime - startTime;
      const durationSeconds = Math.floor(durationMs / 1000);
      const durationFormatted = durationSeconds;

      // Utilisation d'un beacon (ou await synchrone si possible) pour s'assurer que l'appel part
      // Supabase-js utilise fetch, qui peut être annulé si la page se ferme trop vite.
      // On utilise return pour que with-in avant que l'unload ne termine.
      await supabase
        .from("visitors")
        .update({ duration: durationFormatted })
        .eq("session_id", sessionId);
    };

    // Ecouteur pour la fermeture de la page
    window.addEventListener("beforeunload", updateDuration);

    console.log("ajout de l'ecouteur beforeunload fait");

    // Alternativement, visibilitychange est souvent plus fiable sur mobile
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        updateDuration();
      }
    });

    console.log("ajout de l'ecouteur visibilitychange fait");
  } catch (err) {
    console.error("Fatal error in trackVisit:", err);
  }

  return visitorData;
};
