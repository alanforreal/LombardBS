// Re-export the `toast` helper used by app code
import { toast as sonnerToast } from "sonner";

export const toast = sonnerToast;
export type { ToastOptions as ToastOptionsFromSonner } from "sonner";
