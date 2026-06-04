const whatsappUrl = 'https://wa.me/918149351697?text=hii%20i%20need%20automation';

export function WhatsAppSupport() {
  return (
    <a
      aria-label="Chat with YAML AI on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-[70] inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.32)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6"
      href={whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.03 3.2A12.66 12.66 0 0 0 5.2 22.42L3.5 28.8l6.52-1.64A12.62 12.62 0 0 0 16.02 28.6h.01A12.7 12.7 0 0 0 28.7 15.93 12.68 12.68 0 0 0 16.03 3.2Zm0 23.25h-.01a10.48 10.48 0 0 1-5.33-1.46l-.38-.23-3.87.98 1.03-3.76-.25-.39a10.49 10.49 0 1 1 8.81 4.86Zm5.76-7.85c-.32-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.54-1.57-.94-.84-1.57-1.87-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.39 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="sr-only">WhatsApp support</span>
    </a>
  );
}
