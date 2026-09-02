# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: arizona-sunrise-muffins.spec.ts >> Arizona Sunrise Muffins recipe page >> Amazon CTA uses seller-specific URL and fires analytics event
- Location: tests\arizona-sunrise-muffins.spec.ts:51:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - navigation "Recipe site navigation" [ref=e3]:
      - generic [ref=e4]:
        - link "Prickly Pear Guide" [ref=e5] [cursor=pointer]:
          - /url: /prickly-pear-guide
        - generic [ref=e6]: /
        - generic [ref=e7]: Arizona Sunrise Muffins with Prickly Pear Jelly
      - link "View on Amazon (opens in new tab)" [ref=e8] [cursor=pointer]:
        - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
        - text: View on Amazon
        - generic [ref=e9]: (opens in new tab)
    - navigation "Recipe section navigation" [ref=e10]:
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Ingredients" [ref=e13] [cursor=pointer]:
            - /url: "#ingredients"
        - listitem [ref=e14]:
          - link "Directions" [ref=e15] [cursor=pointer]:
            - /url: "#directions"
        - listitem [ref=e16]:
          - link "Recipe Card" [ref=e17] [cursor=pointer]:
            - /url: "#recipe-card"
        - listitem [ref=e18]:
          - link "FAQ" [ref=e19] [cursor=pointer]:
            - /url: "#faq"
  - navigation "Breadcrumb" [ref=e20]:
    - list [ref=e21]:
      - listitem [ref=e22]:
        - link "Prickly Pear Guide" [ref=e23] [cursor=pointer]:
          - /url: /prickly-pear-guide
      - listitem [ref=e24]:
        - generic [ref=e25]: /
        - link "Recipes" [ref=e26] [cursor=pointer]:
          - /url: /prickly-pear-guide#recipes
      - listitem [ref=e27]:
        - generic [ref=e28]: /
        - generic [ref=e29]: Arizona Sunrise Muffins with Prickly Pear Jelly
  - main [ref=e30]:
    - generic [ref=e31]:
      - img "Arizona Sunrise Muffins with prickly pear jelly centers on a rustic board" [ref=e33]
      - generic [ref=e35]:
        - generic [ref=e36]:
          - paragraph [ref=e37]: Homemade muffin recipe
          - heading "Arizona Sunrise Muffins with Prickly Pear Jelly" [level=1] [ref=e38]
          - paragraph [ref=e39]: Golden homemade muffins with a bright prickly pear jelly center — based on Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - list "Recipe highlights" [ref=e40]:
            - listitem [ref=e41]: Homemade muffins
            - listitem [ref=e42]: Prickly pear jelly filling
            - listitem [ref=e43]: 400°F / 375°F convection
            - listitem [ref=e44]: 20–25 minutes
          - generic [ref=e45]:
            - link "Jump to Recipe" [ref=e46] [cursor=pointer]:
              - /url: "#recipe-card"
            - link "Get the Prickly Pear Jelly (opens in new tab)" [active] [ref=e47] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get the Prickly Pear Jelly
              - generic [ref=e48]: (opens in new tab)
        - img "Prickly pear jelly visible inside a sliced homemade muffin" [ref=e50]
    - region [ref=e51]:
      - generic [ref=e52]:
        - img "Prickly pear jelly visible inside a sliced homemade muffin" [ref=e54]
        - generic [ref=e55]:
          - heading "What Are Arizona Sunrise Muffins?" [level=2] [ref=e56]
          - generic [ref=e57]:
            - paragraph [ref=e58]: Arizona Sunrise Muffins are golden homemade muffins with a bright prickly pear jelly center that appears when you bite or slice into them.
            - paragraph [ref=e59]: "This walkthrough follows Cheri's Desert Harvest's Arizona Sunrise Muffins recipe: fill muffin tins half full, place 1 teaspoon of prickly pear jelly in the exact center (keeping jelly away from the edges), cover with remaining batter, and bake until golden."
            - paragraph [ref=e60]: The result is a soft muffin with a glossy, fruit-forward surprise inside — a simple technique that works well for breakfast, brunch, or a Southwest-themed spread.
    - region [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - heading "Why Use Prickly Pear Jelly?" [level=2] [ref=e64]
          - generic [ref=e65]:
            - paragraph [ref=e66]: Prickly pear jelly is a jelly made using prickly pear cactus fruit. It adds a distinctive fruit note and a vivid color to the muffin center without changing the basic muffin batter.
            - paragraph [ref=e67]: Prickly pear is often described as fruity and distinctive, but flavor varies by fruit and preparation. In muffins, the jelly stays soft and glossy when sealed inside the batter.
            - paragraph [ref=e68]: You can substitute another jam or jelly if needed, though prickly pear jelly gives these muffins their signature Southwest character.
            - paragraph [ref=e69]:
              - link "Learn more about prickly pear jelly" [ref=e70] [cursor=pointer]:
                - /url: /prickly-pear-guide
              - text: .
        - img "Prickly pear fruit halved to show vivid magenta flesh" [ref=e72]
    - region [ref=e73]:
      - generic [ref=e74]:
        - generic [ref=e76]:
          - heading "Why the Jelly Goes in the Center" [level=2] [ref=e77]
          - list [ref=e78]:
            - listitem [ref=e79]:
              - generic [ref=e81]: Fill each muffin cup about halfway with batter — do not fill to the top yet.
            - listitem [ref=e82]:
              - generic [ref=e84]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter.
            - listitem [ref=e85]:
              - generic [ref=e87]: Keep the jelly away from the edges of the cup so it stays sealed inside.
            - listitem [ref=e88]:
              - generic [ref=e90]: Spoon remaining batter over the jelly to cover it completely.
            - listitem [ref=e91]:
              - generic [ref=e93]: Tins should be about two-thirds full before baking.
            - listitem [ref=e94]:
              - generic [ref=e96]: Bake until the tops are golden.
        - generic [ref=e98]:
          - heading "Common Mistakes" [level=2] [ref=e99]
          - list [ref=e100]:
            - listitem [ref=e101]:
              - generic [ref=e103]: Putting jelly against the muffin edge — it can leak out during baking.
            - listitem [ref=e104]:
              - generic [ref=e106]: Overfilling the cup — batter needs room to rise without overflowing.
            - listitem [ref=e107]:
              - generic [ref=e109]: Using too much jelly — 1 teaspoon per muffin is enough; more can burst through.
            - listitem [ref=e110]:
              - generic [ref=e112]: Not sealing the jelly with enough batter — the top layer should fully cover the jelly.
        - generic [ref=e114]:
          - heading "How to Get a Clean Jelly Center" [level=2] [ref=e115]
          - list [ref=e116]:
            - listitem [ref=e117]:
              - generic [ref=e119]: Use room-temperature jelly so it spreads easily into a small mound in the center.
            - listitem [ref=e120]:
              - generic [ref=e122]: Press the jelly gently into the batter rather than pushing it to the side.
            - listitem [ref=e123]:
              - generic [ref=e125]: Fill the top layer of batter evenly so no jelly peeks through before baking.
            - listitem [ref=e126]:
              - generic [ref=e128]: Let muffins cool in the pan briefly, then transfer to a rack — cutting while hot can make the center run.
    - region [ref=e129]:
      - generic [ref=e130]:
        - generic [ref=e131]:
          - heading "Ingredients" [level=2] [ref=e132]
          - paragraph [ref=e133]: A short pantry list for homemade muffins with a prickly pear jelly center.
        - list [ref=e135]:
          - listitem [ref=e136]:
            - paragraph [ref=e137]: 2 cups all-purpose flour
          - listitem [ref=e138]:
            - paragraph [ref=e139]: 1/4 cup sugar
          - listitem [ref=e140]:
            - paragraph [ref=e141]: 3 tsp baking powder
          - listitem [ref=e142]:
            - paragraph [ref=e143]: 1/2 tsp salt
          - listitem [ref=e144]:
            - paragraph [ref=e145]: 1/4 cup vegetable oil
          - listitem [ref=e146]:
            - paragraph [ref=e147]: 1 egg, slightly beaten
          - listitem [ref=e148]:
            - paragraph [ref=e149]: 1 cup milk
          - listitem [ref=e150]:
            - paragraph [ref=e151]: 1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly
            - paragraph [ref=e152]: source recipe; 1 tsp per muffin
        - generic [ref=e153]:
          - paragraph [ref=e154]: Ingredients listed above follow Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - paragraph [ref=e155]: The original Cheri's Desert Harvest recipe calls for an 8-ounce jar of prickly pear jelly. The product shown on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e156]:
      - generic [ref=e157]:
        - generic [ref=e158]:
          - heading "How to Make Arizona Sunrise Muffins" [level=2] [ref=e159]
          - paragraph [ref=e160]: Preheat to 400°F (standard) or 375°F (convection). Bake 20–25 minutes until golden.
        - list [ref=e162]:
          - listitem [ref=e163]:
            - generic [ref=e164]: "1"
            - heading "Preheat and Prepare Dry Ingredients" [level=4] [ref=e165]
            - paragraph [ref=e166]: Preheat the oven to 400°F (standard) or 375°F (convection). Line a muffin tin with paper liners. Sift together the flour, sugar, baking powder, and salt in a large bowl.
          - listitem [ref=e167]:
            - generic [ref=e168]: "2"
            - heading "Mix the Wet Ingredients" [level=4] [ref=e169]
            - paragraph [ref=e170]: In a separate bowl, whisk the vegetable oil, slightly beaten egg, and milk until frothy.
          - listitem [ref=e171]:
            - generic [ref=e172]: "3"
            - heading "Combine Batter" [level=4] [ref=e173]
            - paragraph [ref=e174]: Pour the wet mixture into the dry ingredients and stir until moistened. The batter will be lumpy — do not overmix.
          - listitem [ref=e175]:
            - generic [ref=e176]: "4"
            - heading "Fill the Muffin Cups" [level=4] [ref=e177]
            - paragraph [ref=e178]: Fill muffin tins half full with batter.
          - listitem [ref=e179]:
            - generic [ref=e180]: "5"
            - heading "Add the Prickly Pear Jelly" [level=4] [ref=e181]
            - paragraph [ref=e182]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter in each cup, keeping the jelly away from the edges.
          - listitem [ref=e183]:
            - generic [ref=e184]: "6"
            - heading "Cover and Bake" [level=4] [ref=e185]
            - paragraph [ref=e186]: Cover with remaining batter. Tins should be about two-thirds full. Bake for 20–25 minutes until golden.
    - region [ref=e187]:
      - generic [ref=e188]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - paragraph [ref=e191]: Printable recipe
            - heading "Arizona Sunrise Muffins with Prickly Pear Jelly" [level=2] [ref=e192]
            - paragraph [ref=e193]: Golden homemade muffins with a bright prickly pear jelly center — based on Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
            - paragraph [ref=e194]: "Updated September 1, 2026 · Recipe concept: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe"
            - generic [ref=e195]:
              - generic [ref=e196]:
                - term [ref=e197]: "Difficulty:"
                - definition [ref=e198]: Easy
              - generic [ref=e199]:
                - term [ref=e200]: "Bake:"
                - definition [ref=e201]: 400°F / 375°F convection
              - generic [ref=e202]:
                - term [ref=e203]: "Time:"
                - definition [ref=e204]: 20–25 minutes
          - button "Print Recipe" [ref=e205] [cursor=pointer]
        - generic [ref=e206]:
          - generic [ref=e207]:
            - heading "Ingredients" [level=3] [ref=e208]
            - list [ref=e209]:
              - listitem [ref=e210]:
                - generic [ref=e212]: 2 cups all-purpose flour
              - listitem [ref=e213]:
                - generic [ref=e215]: 1/4 cup sugar
              - listitem [ref=e216]:
                - generic [ref=e218]: 3 tsp baking powder
              - listitem [ref=e219]:
                - generic [ref=e221]: 1/2 tsp salt
              - listitem [ref=e222]:
                - generic [ref=e224]: 1/4 cup vegetable oil
              - listitem [ref=e225]:
                - generic [ref=e227]: 1 egg, slightly beaten
              - listitem [ref=e228]:
                - generic [ref=e230]: 1 cup milk
              - listitem [ref=e231]:
                - generic [ref=e233]: 1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly (source recipe; 1 tsp per muffin)
            - paragraph [ref=e234]: Ingredients listed above follow Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - generic [ref=e235]:
            - heading "Directions" [level=3] [ref=e236]
            - list [ref=e237]:
              - listitem [ref=e238]:
                - generic [ref=e239]: "1."
                - generic [ref=e240]:
                  - paragraph [ref=e241]: Preheat and Prepare Dry Ingredients
                  - paragraph [ref=e242]: Preheat the oven to 400°F (standard) or 375°F (convection). Line a muffin tin with paper liners. Sift together the flour, sugar, baking powder, and salt in a large bowl.
              - listitem [ref=e243]:
                - generic [ref=e244]: "2."
                - generic [ref=e245]:
                  - paragraph [ref=e246]: Mix the Wet Ingredients
                  - paragraph [ref=e247]: In a separate bowl, whisk the vegetable oil, slightly beaten egg, and milk until frothy.
              - listitem [ref=e248]:
                - generic [ref=e249]: "3."
                - generic [ref=e250]:
                  - paragraph [ref=e251]: Combine Batter
                  - paragraph [ref=e252]: Pour the wet mixture into the dry ingredients and stir until moistened. The batter will be lumpy — do not overmix.
              - listitem [ref=e253]:
                - generic [ref=e254]: "4."
                - generic [ref=e255]:
                  - paragraph [ref=e256]: Fill the Muffin Cups
                  - paragraph [ref=e257]: Fill muffin tins half full with batter.
              - listitem [ref=e258]:
                - generic [ref=e259]: "5."
                - generic [ref=e260]:
                  - paragraph [ref=e261]: Add the Prickly Pear Jelly
                  - paragraph [ref=e262]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter in each cup, keeping the jelly away from the edges.
              - listitem [ref=e263]:
                - generic [ref=e264]: "6."
                - generic [ref=e265]:
                  - paragraph [ref=e266]: Cover and Bake
                  - paragraph [ref=e267]: Cover with remaining batter. Tins should be about two-thirds full. Bake for 20–25 minutes until golden.
    - region [ref=e268]:
      - generic [ref=e270]:
        - heading "Tips for Using Prickly Pear Jelly in Muffins" [level=2] [ref=e271]
        - generic [ref=e272]:
          - paragraph [ref=e273]: 1 teaspoon of jelly per muffin matches the source recipe's placement guidance. Adjust slightly based on muffin size, but avoid overfilling.
          - paragraph [ref=e274]: If you substitute another jam, choose one with a similar consistency — thick, spoonable, and not too runny.
          - paragraph [ref=e275]: Store leftover jelly in the refrigerator after opening.
          - paragraph [ref=e276]: Explore more ways to use prickly pear jelly beyond muffins — glazes, toast, cheese boards, and cocktails all work well.
        - paragraph [ref=e277]:
          - link "Explore more ways to use prickly pear jelly" [ref=e278] [cursor=pointer]:
            - /url: /prickly-pear-guide
          - text: in our complete guide.
    - region [ref=e279]:
      - generic [ref=e280]:
        - generic [ref=e281]:
          - heading "About the jelly in this recipe" [level=2] [ref=e282]
          - paragraph [ref=e283]: Packaged product reference for the 5 oz jar used in the topping above. Cheri's Desert Harvest Prickly Pear Cactus Jelly — 5 OZ / 140g (ASIN B000MBM8T8).
        - generic [ref=e284]:
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e286]
          - generic [ref=e287]:
            - paragraph [ref=e288]: Cheri's Desert Harvest
            - heading "Prickly Pear Cactus Jelly" [level=3] [ref=e289]
            - paragraph [ref=e290]: 5 OZ / 140g
            - generic [ref=e291]:
              - heading "Ingredients" [level=4] [ref=e292]
              - list [ref=e293]:
                - listitem [ref=e294]: Organic Prickly Pear Cactus
                - listitem [ref=e295]: Organic Lemon Juice
                - listitem [ref=e296]: Pure Cane Sugar
                - listitem [ref=e297]: Citrus Pectin
                - listitem [ref=e298]: Citric Acid
            - list "Package attributes" [ref=e299]:
              - listitem [ref=e300]: Made in USA
              - listitem [ref=e301]: Contains Fresh Fruit Juices
              - listitem [ref=e302]: No Artificial Colors
              - listitem [ref=e303]: No Preservatives
            - generic [ref=e304]:
              - link "View on Amazon (opens in new tab)" [ref=e305] [cursor=pointer]:
                - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
                - text: View on Amazon
                - generic [ref=e306]: (opens in new tab)
              - paragraph [ref=e307]:
                - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
                - link "View ingredients" [ref=e308] [cursor=pointer]:
                  - /url: "#transparency"
                - text: ·
                - link "Explore serving ideas" [ref=e309] [cursor=pointer]:
                  - /url: "#ways-to-use"
    - complementary [ref=e310]:
      - generic [ref=e311]:
        - heading "Recipe source & product disclosure" [level=2] [ref=e312]
        - paragraph [ref=e313]: "Recipe source: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe. This page is an independent recipe and educational page and is not the official Cheri's Desert Harvest website. The author/operator may earn from sales of the product linked below."
        - paragraph [ref=e314]: The original Cheri's Desert Harvest recipe calls for an 8-ounce jar of prickly pear jelly. The product shown on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e315]:
      - generic [ref=e316]:
        - generic [ref=e317]:
          - heading "More ways to use prickly pear jelly" [level=2] [ref=e318]
          - paragraph [ref=e319]: After muffins, try these ideas from the Prickly Pear Guide.
        - list [ref=e320]:
          - listitem [ref=e322]:
            - link [ref=e323] [cursor=pointer]:
              - /url: /prickly-pear-guide
              - heading "Prickly Pear Guide" [level=3] [ref=e324]
              - paragraph [ref=e325]: Learn more about prickly pear jelly — what it is, how it tastes, and seven ways to use it.
          - listitem [ref=e327]:
            - link [ref=e328] [cursor=pointer]:
              - /url: /recipes/classic-prickly-pear-cheesecake
              - heading "Classic Prickly Pear Cheesecake" [level=3] [ref=e329]
              - paragraph [ref=e330]: Make a creamy cheesecake with a sour cream and prickly pear jelly topping using one 5 oz jar.
          - listitem [ref=e332]:
            - link [ref=e333] [cursor=pointer]:
              - /url: /prickly-pear-guide#uses
              - heading "Glaze for grilled meats" [level=3] [ref=e334]
              - paragraph [ref=e335]: Brush warmed jelly onto pork chops or chicken during the last minutes of grilling.
          - listitem [ref=e337]:
            - link [ref=e338] [cursor=pointer]:
              - /url: /prickly-pear-guide#uses
              - heading "Cheese board accent" [level=3] [ref=e339]
              - paragraph [ref=e340]: Pair with soft cheeses and crackers for a Southwest-inspired spread.
        - link "Explore the Prickly Pear Guide" [ref=e342] [cursor=pointer]:
          - /url: /prickly-pear-guide
    - region [ref=e343]:
      - generic [ref=e344]:
        - heading "Frequently Asked Questions" [level=2] [ref=e345]
        - paragraph [ref=e346]: Practical answers about the muffins and prickly pear jelly.
        - generic [ref=e347]:
          - group [ref=e348]:
            - generic [ref=e349] [cursor=pointer]:
              - term [ref=e350]: What are Arizona Sunrise Muffins?
              - generic [ref=e351]: +
            - definition [ref=e352]:
              - paragraph [ref=e353]: Arizona Sunrise Muffins are homemade muffins with a prickly pear jelly center. The recipe comes from Cheri's Desert Harvest — you fill muffin tins half full, add 1 teaspoon of jelly in the exact center, cover with batter, and bake until golden.
          - group [ref=e354]:
            - generic [ref=e355] [cursor=pointer]:
              - term [ref=e356]: How do you put jelly inside a muffin?
              - generic [ref=e357]: +
          - group [ref=e358]:
            - generic [ref=e359] [cursor=pointer]:
              - term [ref=e360]: How much prickly pear jelly should you put in a muffin?
              - generic [ref=e361]: +
          - group [ref=e362]:
            - generic [ref=e363] [cursor=pointer]:
              - term [ref=e364]: What does prickly pear jelly taste like?
              - generic [ref=e365]: +
          - group [ref=e366]:
            - generic [ref=e367] [cursor=pointer]:
              - term [ref=e368]: Can I use another jam instead of prickly pear jelly?
              - generic [ref=e369]: +
          - group [ref=e370]:
            - generic [ref=e371] [cursor=pointer]:
              - term [ref=e372]: What temperature do you bake these muffins at?
              - generic [ref=e373]: +
          - group [ref=e374]:
            - generic [ref=e375] [cursor=pointer]:
              - term [ref=e376]: How long do Arizona Sunrise Muffins bake?
              - generic [ref=e377]: +
          - group [ref=e378]:
            - generic [ref=e379] [cursor=pointer]:
              - term [ref=e380]: What is prickly pear jelly?
              - generic [ref=e381]: +
          - group [ref=e382]:
            - generic [ref=e383] [cursor=pointer]:
              - term [ref=e384]: Where can I buy prickly pear jelly?
              - generic [ref=e385]: +
    - region [ref=e386]:
      - generic [ref=e387]:
        - generic [ref=e388]:
          - heading "Ready for a little prickly-pear surprise?" [level=2] [ref=e389]
          - paragraph [ref=e390]: Bake the muffins, try the jelly center, then explore more ways to use prickly pear jelly.
          - generic [ref=e391]:
            - link "Get Prickly Pear Jelly (opens in new tab)" [ref=e392] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get Prickly Pear Jelly
              - generic [ref=e393]: (opens in new tab)
            - link "Explore More Prickly Pear Recipes" [ref=e394] [cursor=pointer]:
              - /url: /prickly-pear-guide
          - paragraph [ref=e395]:
            - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
            - link "View ingredients" [ref=e396] [cursor=pointer]:
              - /url: "#transparency"
            - text: ·
            - link "Explore serving ideas" [ref=e397] [cursor=pointer]:
              - /url: "#ways-to-use"
        - generic [ref=e398]:
          - img "Editorial photo of finished Arizona Sunrise Muffins" [ref=e400]
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e402]
  - contentinfo [ref=e403]:
    - generic [ref=e404]:
      - generic [ref=e405]:
        - generic [ref=e406]:
          - paragraph [ref=e407]: Prickly Pear Jelly Guide
          - paragraph [ref=e408]: An independent educational resource about prickly pear fruit and Cheri's Desert Harvest Prickly Pear Cactus Jelly. Product information is sourced from the product label. This site is not owned or operated by Cheri's Desert Harvest.
        - generic [ref=e409]:
          - paragraph [ref=e410]: Cheri's Desert Harvest
          - paragraph [ref=e411]: 1840 E. Winsett Street, Tucson, Arizona 85719
          - paragraph [ref=e412]:
            - link "www.CherisDesertHarvest.com" [ref=e413] [cursor=pointer]:
              - /url: https://www.CherisDesertHarvest.com
      - generic [ref=e414]:
        - paragraph [ref=e415]: Amazon availability, pricing, and promotions are subject to change.
        - paragraph [ref=e416]: © 2026 Prickly Pear Jelly Guide. This page contains links to Amazon. Product facts are based on the manufacturer's label. Not affiliated with or endorsed by Amazon or Cheri's Desert Harvest.
  - alert [ref=e417]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import { AMAZON_PRODUCT_URL, SITE_URL, GUIDE_PATH, GUIDE_UPDATED_ISO } from "../src/config/product";
  3   | 
  4   | const RECIPE_PATH = "/recipes/arizona-sunrise-muffins";
  5   | const CANONICAL_URL = `${SITE_URL}${RECIPE_PATH}`;
  6   | const GUIDE_URL = `${SITE_URL}${GUIDE_PATH}`;
  7   | const SELLER_URL = AMAZON_PRODUCT_URL;
  8   | 
  9   | const SOURCE_INGREDIENTS = [
  10  |   "2 cups all-purpose flour",
  11  |   "1/4 cup sugar",
  12  |   "3 tsp baking powder",
  13  |   "1/2 tsp salt",
  14  |   "1/4 cup vegetable oil",
  15  |   "1 egg, slightly beaten",
  16  |   "1 cup milk",
  17  |   "1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly",
  18  | ];
  19  | 
  20  | test.describe("Arizona Sunrise Muffins recipe page", () => {
  21  |   test("page loads successfully with one H1 and required content", async ({
  22  |     page,
  23  |   }) => {
  24  |     await page.goto(RECIPE_PATH);
  25  |     await expect(page).toHaveTitle(
  26  |       /Arizona Sunrise Muffins with Prickly Pear Jelly \| Easy Recipe/i
  27  |     );
  28  | 
  29  |     const headings = page.locator("h1");
  30  |     await expect(headings).toHaveCount(1);
  31  |     await expect(headings).toHaveText(
  32  |       "Arizona Sunrise Muffins with Prickly Pear Jelly"
  33  |     );
  34  | 
  35  |     await expect(page.getByText("Jump to Recipe")).toBeVisible();
  36  |     await expect(page.locator("#ingredients-heading")).toHaveText("Ingredients");
  37  |     await expect(page.locator("#directions-heading")).toHaveText(
  38  |       /How to Make Arizona Sunrise Muffins/i
  39  |     );
  40  |     await expect(page.locator("#recipe-card")).toContainText("Print Recipe");
  41  |     await expect(page.getByText("1 teaspoon").first()).toBeVisible();
  42  |     await expect(page.getByText(/Updated September 1, 2026/i)).toBeVisible();
  43  |   });
  44  | 
  45  |   test("hero Jump to Recipe scrolls to recipe card", async ({ page }) => {
  46  |     await page.goto(RECIPE_PATH);
  47  |     await page.getByRole("link", { name: "Jump to Recipe" }).click();
  48  |     await expect(page.locator("#recipe-card")).toBeInViewport();
  49  |   });
  50  | 
  51  |   test("Amazon CTA uses seller-specific URL and fires analytics event", async ({
  52  |     page,
  53  |   }) => {
  54  |     await page.goto(`${RECIPE_PATH}?src=facebook-easy-homemade-muffins`);
  55  | 
  56  |     await page.evaluate(() => {
  57  |       const w = window as Window & {
  58  |         __TEST_GA__?: boolean;
  59  |         __amazonEvents?: unknown[][];
  60  |         gtag?: (...args: unknown[]) => void;
  61  |       };
  62  |       w.__TEST_GA__ = true;
  63  |       w.__amazonEvents = [];
  64  |       const previous = w.gtag;
  65  |       w.gtag = (...args: unknown[]) => {
  66  |         w.__amazonEvents?.push(args);
  67  |         if (typeof previous === "function") {
  68  |           previous(...args);
  69  |         }
  70  |       };
  71  |     });
  72  | 
  73  |     const heroCta = page
  74  |       .getByRole("link", { name: /Get the Prickly Pear Jelly/i })
  75  |       .first();
  76  |     await expect(heroCta).toHaveAttribute("href", SELLER_URL);
  77  | 
  78  |     const popupPromise = page.waitForEvent("popup");
  79  |     await heroCta.click();
  80  |     const popup = await popupPromise;
  81  |     await expect(popup).toHaveURL(SELLER_URL);
  82  | 
  83  |     await expect
  84  |       .poll(async () => {
  85  |         return page.evaluate(() => {
  86  |           const events =
  87  |             (
  88  |               window as Window & { __amazonEvents?: unknown[][] }
  89  |             ).__amazonEvents ?? [];
  90  |           return events.some(
  91  |             (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  92  |           );
  93  |         });
  94  |       })
> 95  |       .toBe(true);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  96  | 
  97  |     const amazonClick = await page.evaluate(() => {
  98  |       const events =
  99  |         (window as Window & { __amazonEvents?: unknown[][] }).__amazonEvents ??
  100 |         [];
  101 |       return events.find(
  102 |         (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  103 |       );
  104 |     });
  105 | 
  106 |     expect(amazonClick?.[2]).toMatchObject({
  107 |       placement: "recipe-hero",
  108 |       source: "facebook-easy-homemade-muffins",
  109 |     });
  110 |   });
  111 | 
  112 |   test("source query parameter is stored as first-touch source", async ({
  113 |     page,
  114 |   }) => {
  115 |     await page.goto(`${RECIPE_PATH}?src=pinterest-sunrise-muffins`);
  116 |     await expect
  117 |       .poll(async () => {
  118 |         return page.evaluate(() => ({
  119 |           session: sessionStorage.getItem("ppj_session_source"),
  120 |           firstTouch: localStorage.getItem("ppj_first_touch_source"),
  121 |         }));
  122 |       })
  123 |       .toEqual({
  124 |         session: "pinterest-sunrise-muffins",
  125 |         firstTouch: "pinterest-sunrise-muffins",
  126 |       });
  127 |   });
  128 | 
  129 |   test("FAQ is crawlable and expands with details", async ({ page }) => {
  130 |     await page.goto(RECIPE_PATH);
  131 | 
  132 |     await expect(
  133 |       page.getByText(
  134 |         "Arizona Sunrise Muffins are homemade muffins with a prickly pear jelly center."
  135 |       )
  136 |     ).toBeAttached();
  137 | 
  138 |     const question = page.getByText(
  139 |       "How much prickly pear jelly should you put in a muffin?"
  140 |     );
  141 |     await question.click();
  142 |     await expect(
  143 |       page.getByText(
  144 |         "1 teaspoon per muffin matches the source recipe's guidance."
  145 |       )
  146 |     ).toBeVisible();
  147 |   });
  148 | 
  149 |   test("images load and guide link works", async ({ page }) => {
  150 |     await page.goto(RECIPE_PATH);
  151 |     const hero = page
  152 |       .locator('img[alt*="Arizona Sunrise Muffins with prickly pear jelly"]')
  153 |       .first();
  154 |     await expect(hero).toBeVisible();
  155 |     const width = await hero.evaluate(
  156 |       (img: HTMLImageElement) => img.naturalWidth
  157 |     );
  158 |     expect(width).toBeGreaterThan(0);
  159 | 
  160 |     const guideLink = page.getByRole("link", {
  161 |       name: "Explore the Prickly Pear Guide",
  162 |     });
  163 |     await expect(guideLink).toHaveAttribute("href", "/prickly-pear-guide");
  164 |   });
  165 | 
  166 |   test("mobile viewport has no horizontal overflow", async ({ page }) => {
  167 |     await page.setViewportSize({ width: 390, height: 844 });
  168 |     await page.goto(RECIPE_PATH);
  169 |     const overflow = await page.evaluate(() => {
  170 |       return (
  171 |         document.documentElement.scrollWidth >
  172 |         document.documentElement.clientWidth + 1
  173 |       );
  174 |     });
  175 |     expect(overflow).toBe(false);
  176 |   });
  177 | 
  178 |   test("print stylesheet keeps recipe card content", async ({ page }) => {
  179 |     await page.goto(RECIPE_PATH);
  180 |     await page.emulateMedia({ media: "print" });
  181 |     await expect(page.locator("#printable-recipe")).toBeVisible();
  182 |     await expect(page.locator("#printable-recipe")).toContainText(
  183 |       "Arizona Sunrise Muffins with Prickly Pear Jelly"
  184 |     );
  185 |     await expect(
  186 |       page.locator("header.sticky.print\\:hidden, header.sticky")
  187 |     ).toBeHidden();
  188 |   });
  189 | 
  190 |   test("recipe disclosure is visible near product area", async ({ page }) => {
  191 |     await page.goto(RECIPE_PATH);
  192 |     const disclosure = page.locator("#recipe-disclosure");
  193 |     await expect(disclosure).toBeVisible();
  194 |     await expect(disclosure).toContainText(
  195 |       "Recipe source: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe."
```