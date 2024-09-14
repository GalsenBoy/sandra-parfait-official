import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function goToUpPage(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>){
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (window.history.replaceState) {
      window.history.replaceState(null, document.title, window.location.pathname);
    }
}
