import astragalus_img from "./3astragalus.jpg";
import mushrooms_img from "./3mushrooms.jpg";
import ashwagandha_img from "./3ashwagandha.jpg";
import elderberry_img from "./3Elderberry.jpg";
import garlic_img from "./3garlic.jpeg";
import echinacea_img from "./3Echinacea.jpg";
import thyme_img from "./2thyme.jpg";

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
    description: "Boosts immune function and helps the body adapt to stress.",
    category: "immunity",
    image: astragalus_img,
    common_name: "Astragalus",
    scientific_name: "Astragalus membranaceus"
  },
  {
    id: 2,
    description: "Rich in beta-glucans to support immune health.",
    category: "immunity",
    image: mushrooms_img,
    common_name: "Mushrooms",
    scientific_name: "Agaricus bisporus"
  },
  {
    id: 3,
    description: "Helps reduce stress and enhance immunity.",
    category: "immunity",
    image: ashwagandha_img,
    common_name: "Ashwagandha",
    scientific_name: "Withania somnifera"
  },
  {
    id: 4,
    description: "Supports respiratory health and boosts the immune system.",
    category: "immunity",
    image: elderberry_img,
    common_name: "Elderberry",
    scientific_name: "Sambucus nigra"
  },
  {
    id: 5,
    description: "Contains allicin, known for its immune-boosting properties.",
    category: "immunity",
    image: garlic_img,
    common_name: "Garlic",
    scientific_name: "Allium sativum"
  },
  {
    id: 6,
    description: "Helps to fight infections and supports immune defense.",
    category: "immunity",
    image: echinacea_img,
    common_name: "Echinacea",
    scientific_name: "Echinacea purpurea"
  },

  // Skin Care
  {
    id: 7,
    description: "A natural antiseptic for skin care.",
    category: "skin care",
    image: thyme_img,
    common_name: "Thyme",
    scientific_name: "Thymus vulgaris"
  },
  {
    id: 8,
    description: "Soothes the skin and reduces inflammation.",
    category: "skin care",
    image: chamomile_d_img,
    common_name: "Chamomile",
    scientific_name: "Matricaria chamomilla"
  },
  {
    id: 9,
    description: "Helps control acne and promotes clear skin.",
    category: "skin care",
    image: sage_img,
    common_name: "Sage",
    scientific_name: "Salvia officinalis"
  },
  {
    id: 10,
    description: "Cools and refreshes the skin.",
    category: "skin care",
    image: mint_img,
    common_name: "Mint",
    scientific_name: "Mentha"
  },
  {
    id: 11,
    description: "Known for its moisturizing and healing properties.",
    category: "skin care",
    image: aloe_vera_img,
    common_name: "Aloe Vera",
    scientific_name: "Aloe barbadensis miller"
  },
  {
    id: 12,
    description: "Calms and heals irritated skin.",
    category: "skin care",
    image: lavender_img,
    common_name: "Lavender",
    scientific_name: "Lavandula"
  },
  {
    id: 13,
    description: "Rich in antioxidants, promotes healthy skin.",
    category: "skin care",
    image: rosemary_img,
    common_name: "Rosemary",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 14,
    description: "Hydrates and soothes skin.",
    category: "skin care",
    image: cucumber_img,
    common_name: "Cucumber",
    scientific_name: "Cucumis sativus"
  },
  {
    id: 15,
    description: "Soothes skin and speeds up wound healing.",
    category: "skin care",
    image: calendula_img,
    common_name: "Calendula",
    scientific_name: "Calendula officinalis"
  },
  {
    id: 16,
    description: "Has antiseptic properties for skin care.",
    category: "skin care",
    image: bay_leaf_img,
    common_name: "Bay Leaf",
    scientific_name: "Laurus nobilis"
  },
  {
    id: 17,
    description: "Helps detoxify the skin.",
    category: "skin care",
    image: cilantro_img,
    common_name: "Cilantro",
    scientific_name: "Coriandrum sativum"
  },
  {
    id: 18,
    description: "Hydrates and rejuvenates skin.",
    category: "skin care",
    image: roses_img,
    common_name: "Roses",
    scientific_name: "Rosa"
  },

  // Digestive Health
  {
    id: 19,
    description: "Supports digestion and relieves gas.",
    category: "digestive health",
    image: angelica_img,
    common_name: "Angelica",
    scientific_name: "Angelica archangelica"
  },
  {
    id: 20,
    description: "Soothes digestive discomfort.",
    category: "digestive health",
    image: chamomile_d_img,
    common_name: "Chamomile",
    scientific_name: "Matricaria chamomilla"
  },
  {
    id: 21,
    description: "Promotes healthy digestion and regulates blood sugar.",
    category: "digestive health",
    image: cinnamon_img,
    common_name: "Cinnamon",
    scientific_name: "Cinnamomum verum"
  },
  {
    id: 22,
    description: "Aids digestion and detoxification.",
    category: "digestive health",
    image: triphala_img,
    common_name: "Triphala",
    scientific_name: "Three fruits: Emblica officinalis, Terminalia bellirica, Terminalia chebula"
  },
  {
    id: 23,
    description: "Soothes the digestive tract and relieves indigestion.",
    category: "digestive health",
    image: licorice_img,
    common_name: "Licorice",
    scientific_name: "Glycyrrhiza glabra"
  },
  {
    id: 24,
    description: "Stimulates digestion and relieves bloating.",
    category: "digestive health",
    image: rosemary_d_img,
    common_name: "Rosemary",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 25,
    description: "Aids in digestion and promotes bowel health.",
    category: "digestive health",
    image: bael_plant_img,
    common_name: "Bael Plant",
    scientific_name: "Aegle marmelos"
  },
  {
    id: 26,
    description: "Calms the digestive system and reduces stress.",
    category: "digestive health",
    image: lemon_balm_img,
    common_name: "Lemon Balm",
    scientific_name: "Melissa officinalis"
  },
  {
    id: 27,
    description: "Relieves gas and supports digestion.",
    category: "digestive health",
    image: fennel_img,
    common_name: "Fennel",
    scientific_name: "Foeniculum vulgare"
  },
  {
    id: 28,
    description: "Eases digestive discomfort and relieves bloating.",
    category: "digestive health",
    image: peppermint_img,
    common_name: "Peppermint",
    scientific_name: "Mentha piperita"
  },
  {
    id: 29,
    description: "Promotes healthy digestion and reduces inflammation.",
    category: "digestive health",
    image: turmeric_img,
    common_name: "Turmeric",
    scientific_name: "Curcuma longa"
  },
  {
    id: 30,
    description: "Helps with nausea and improves digestion.",
    category: "digestive health",
    image: ginger_img,
    common_name: "Ginger",
    scientific_name: "Zingiber officinale"
  },
  // Immunity
{
  id: 31,
  description: "Rich in antioxidants, helps boost the immune system.",
  category: "immunity",
  image: thyme_img,
  common_name: "Thyme",
  scientific_name: "Thymus vulgaris"
},
{
  id: 32,
  description: "Promotes immune health and reduces inflammation.",
  category: "immunity",
  image: lemon_balm_img,
  common_name: "Lemon Balm",
  scientific_name: "Melissa officinalis"
},
{
  id: 33,
  description: "Known for its immune-boosting properties and anti-inflammatory benefits.",
  category: "immunity",
  image: rosemary_d_img,
  common_name: "Rosemary",
  scientific_name: "Salvia rosmarinus"
},
{
  id: 34,
  description: "Aids in boosting immunity and fighting infections.",
  category: "immunity",
  image: peppermint_img,
  common_name: "Peppermint",
  scientific_name: "Mentha piperita"
},
{
  id: 35,
  description: "Contains curcumin, which has immune-boosting and anti-inflammatory properties.",
  category: "immunity",
  image: turmeric_img,
  common_name: "Turmeric",
  scientific_name: "Curcuma longa"
},
{
  id: 36,
  description: "Helps strengthen the immune system and reduce oxidative stress.",
  category: "immunity",
  image: ginger_img,
  common_name: "Ginger",
  scientific_name: "Zingiber officinale"
}
,
];

export default all_product;

