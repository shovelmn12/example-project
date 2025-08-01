import { initializeApp } from "firebase/app";

import { type BlocContext } from "@/bloc";
import { type EventsEmitter } from "@/events";

import { type FirebaseState, type InitFirebaseEvent } from "..";

const config = {
  apiKey: "AIzaSyCHZ1iODNpSsB3GjlvGBwQb6IaPts38deY",
  authDomain: "aether-17437.firebaseapp.com",
  projectId: "aether-17437",
  storageBucket: "aether-17437.firebasestorage.app",
  messagingSenderId: "1046865714336",
  appId: "1:1046865714336:web:7fb47a56e0d30f8167bdc5",
  measurementId: "G-FRZBGDFQN5",
};

export interface InitUtils {
  readonly bus: EventsEmitter;
}

export function onInit(
  _: InitFirebaseEvent,
  { update }: BlocContext<FirebaseState>,
  { bus }: InitUtils
): void {
  try {
    const app = initializeApp(config);

    update({ type: "initialized", app });

    bus.emit("firebase", { type: "initialized" });
  } catch (error) {
    update({ type: "error", error });

    bus.emit("firebase", { type: "error", error });
  }
}
