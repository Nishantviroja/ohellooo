"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalInit() {
  useEffect(() => {
    OneSignal.init({
       appId: "c5702b98-74f2-43b7-b20a-cce0af698786",
      notifyButton: { enable: true }, // floating bell button (optional)
    });
  }, []);

  return null; // no UI element is needed
}
