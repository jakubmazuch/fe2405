'use strict';

const microsoft = new Firma("Microsoft Corporation", "1234568", "Redmond, Washington, USA");
const nvidia = new Firma("NVIDIA Corporation", "44775566", "Santa Clara, Kalifornie, USA");

microsoft.vypisInfoOFirme();
nvidia.vypisInfoOFirme();
microsoft.pridejZamestnance();
microsoft.vypisZamestnancu();