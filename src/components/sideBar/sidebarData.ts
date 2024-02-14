export const sideBarData = [
  {
    id: 1,
    label: "Hoe kan ik deelnemen?",
    isIcon: false,
    link: `video`,
  },
  {
    id: 2,
    label: "Algemene voorwaarden",
    isIcon: false,
    link: `${
      import.meta.env.VITE_ASSET_URL
    }/pdf/Milka-x-Snelle-TnC-document-v1.pdf`,
  },
  {
    id: 3,
    label: "Privacybeleid",
    isIcon: false,
    link: "https://privacy.mondelezinternational.com/eu/nl-NL/privacy-notice/",
  },
  {
    id: 4,
    label: "ONS CookiebeleID",
    isIcon: false,
    link: `${import.meta.env.VITE_SITE_URL}/cookies`,
  },
  {
    id: 5,
    label: "Contact opnemen",
    isIcon: false,
    link: "https://contactus.mdlzapps.com/milka/contact/nl-NL/",
  },
];
