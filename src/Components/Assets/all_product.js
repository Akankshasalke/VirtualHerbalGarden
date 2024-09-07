import astragalus_img from "./3astragalus.jpg";
import mushrooms_img from "./3mushrooms.jpg";
import ashwagandha_img from "./3ashwagandha.jpg";
import elderberry_img from "./3Elderberry.jpg";
import garlic_img from "./3garlic.jpeg";
import echinacea_img from "./3Echinacea.jpg";
import thyme_img from "./2thyme.jpg";
import chamomile_img from "./2chamomile.jpg";
import sage_img from "./2sage.webp";
import mint_img from "./2mint.webp";
import aloe_vera_img from "./2aloe-vera.webp";
import lavender_img from "./2lavender.webp";
import rosemary_img from "./2rosemary.webp";
import cucumber_img from "./2cucumbers.webp";
import calendula_img from "./2calendula.webp";
import bay_leaf_img from "./2bay-leaf.webp";
import cilantro_img from "./2cilantro.jpg";
import roses_img from "./2roses.webp";
import angelica_img from "./angelica.jpg";
import chamomile_d_img from "./Chamomile.jpg";
import cinnamon_img from "./cinnomon.webp";
import triphala_img from "./triphala.png";
import licorice_img from "./Licorice.jpg";
import rosemary_d_img from "./rosemary.jpg";
import bael_plant_img from "./bael-plant.jpg";
import lemon_balm_img from "./lemonbalm.jpg";
import fennel_img from "./fennel.jpg";
import peppermint_img from "./peppermint.jpg";
import turmeric_img from "./turmeric.jpeg";
import ginger_img from "./ginger.webp";

let all_product = [
  // Immunity
  {
    id: 1,
    name: "Astragalus",
    category: "immunity",
    image: astragalus_img,
    description: "Boosts immune function and helps the body adapt to stress.",
  },
  {
    id: 2,
    name: "Mushrooms",
    category: "immunity",
    image: mushrooms_img,
    description: "Rich in beta-glucans to support immune health.",
  },
  {
    id: 3,
    name: "Ashwagandha",
    category: "immunity",
    image: ashwagandha_img,
    description: "Helps reduce stress and enhance immunity.",
  },
  {
    id: 4,
    name: "Elderberry",
    category: "immunity",
    image: elderberry_img,
    description: "Supports respiratory health and boosts the immune system.",
  },
  {
    id: 5,
    name: "Garlic",
    category: "immunity",
    image: garlic_img,
    description: "Contains allicin, known for its immune-boosting properties.",
  },
  {
    id: 6,
    name: "Echinacea",
    category: "immunity",
    image: echinacea_img,
    description: "Helps to fight infections and supports immune defense.",
  },
  
  // Skin Care
  {
    id: 7,
    name: "Thyme",
    category: "skin care",
    image: thyme_img,
    description: "A natural antiseptic for skin care.",
  },
  {
    id: 8,
    name: "Chamomile",
    category: "skin care",
    image: chamomile_img,
    description: "Soothes the skin and reduces inflammation.",
  },
  {
    id: 9,
    name: "Sage",
    category: "skin care",
    image: sage_img,
    description: "Helps control acne and promotes clear skin.",
  },
  {
    id: 10,
    name: "Mint",
    category: "skin care",
    image: mint_img,
    description: "Cools and refreshes the skin.",
  },
  {
    id: 11,
    name: "Aloe Vera",
    category: "skin care",
    image: aloe_vera_img,
    description: "Known for its moisturizing and healing properties.",
  },
  {
    id: 12,
    name: "Lavender",
    category: "skin care",
    image: lavender_img,
    description: "Calms and heals irritated skin.",
  },
  {
    id: 13,
    name: "Rosemary",
    category: "skin care",
    image: rosemary_img,
    description: "Rich in antioxidants, promotes healthy skin.",
  },
  {
    id: 14,
    name: "Cucumber",
    category: "skin care",
    image: cucumber_img,
    description: "Hydrates and soothes skin.",
  },
  {
    id: 15,
    name: "Calendula",
    category: "skin care",
    image: calendula_img,
    description: "Soothes skin and speeds up wound healing.",
  },
  {
    id: 16,
    name: "Bay Leaf",
    category: "skin care",
    image: bay_leaf_img,
    description: "Has antiseptic properties for skin care.",
  },
  {
    id: 17,
    name: "Cilantro",
    category: "skin care",
    image: cilantro_img,
    description: "Helps detoxify the skin.",
  },
  {
    id: 18,
    name: "Roses",
    category: "skin care",
    image: roses_img,
    description: "Hydrates and rejuvenates skin.",
  },

  // Digestive Health
  {
    id: 19,
    name: "Angelica",
    category: "digestive health",
    image: angelica_img,
    description: "Supports digestion and relieves gas.",
  },
  {
    id: 20,
    name: "Chamomile",
    category: "digestive health",
    image: chamomile_d_img,
    description: "Soothes digestive discomfort.",
  },
  {
    id: 21,
    name: "Cinnamon",
    category: "digestive health",
    image: cinnamon_img,
    description: "Promotes healthy digestion and regulates blood sugar.",
  },
  {
    id: 22,
    name: "Triphala",
    category: "digestive health",
    image: triphala_img,
    description: "Aids digestion and detoxification.",
  },
  {
    id: 23,
    name: "Licorice",
    category: "digestive health",
    image: licorice_img,
    description: "Soothes the digestive tract and relieves indigestion.",
  },
  {
    id: 24,
    name: "Rosemary",
    category: "digestive health",
    image: rosemary_d_img,
    description: "Stimulates digestion and relieves bloating.",
  },
  {
    id: 25,
    name: "Bael Plant",
    category: "digestive health",
    image: bael_plant_img,
    description: "Aids in digestion and promotes bowel health.",
  },
  {
    id: 26,
    name: "Lemon Balm",
    category: "digestive health",
    image: lemon_balm_img,
    description: "Calms the digestive system and reduces stress.",
  },
  {
    id: 27,
    name: "Fennel",
    category: "digestive health",
    image: fennel_img,
    description: "Relieves gas and supports digestion.",
  },
  {
    id: 28,
    name: "Peppermint",
    category: "digestive health",
    image: peppermint_img,
    description: "Eases digestive discomfort and relieves bloating.",
  },
  {
    id: 29,
    name: "Turmeric",
    category: "digestive health",
    image: turmeric_img,
    description: "Promotes healthy digestion and reduces inflammation.",
  },
  {
    id: 30,
    name: "Ginger",
    category: "digestive health",
    image: ginger_img,
    description: "Helps with nausea and improves digestion.",
  },
  // Adding 6 more immunity plants
{
  id: 31,
  name: "Triphala",
  category: "immunity",
  image: triphala_img,
  description: "A powerful antioxidant that boosts immunity and overall health.",
},
{
  id: 32,
  name: "Licorice",
  category: "immunity",
  image: licorice_img,
  description: "Supports the immune system and helps fight off infections.",
},
{
  id: 33,
  name: "Rosemary",
  category: "immunity",
  image: rosemary_d_img,
  description: "Contains antioxidants that support immune function.",
},
{
  id: 34,
  name: "Peppermint",
  category: "immunity",
  image: peppermint_img,
  description: "Has antiviral properties that help boost immune response.",
},
{
  id: 35,
  name: "Turmeric",
  category: "immunity",
  image: turmeric_img,
  description: "Contains curcumin, known for its immune-boosting properties.",
},
{
  id: 36,
  name: "Ginger",
  category: "immunity",
  image: ginger_img,
  description: "Boosts immunity and helps combat infections.",
},

];

export default all_product;
