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
      - link "Prickly Pear Guide" [ref=e5] [cursor=pointer]:
        - /url: /prickly-pear-guide
    - navigation "Recipe section navigation" [ref=e6]:
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Ingredients" [ref=e9] [cursor=pointer]:
            - /url: "#ingredients"
        - listitem [ref=e10]:
          - link "Directions" [ref=e11] [cursor=pointer]:
            - /url: "#directions"
        - listitem [ref=e12]:
          - link "Recipe Card" [ref=e13] [cursor=pointer]:
            - /url: "#recipe-card"
        - listitem [ref=e14]:
          - link "FAQ" [ref=e15] [cursor=pointer]:
            - /url: "#faq"
  - navigation "Breadcrumb" [ref=e16]:
    - list [ref=e17]:
      - listitem [ref=e18]:
        - link "Prickly Pear Guide" [ref=e19] [cursor=pointer]:
          - /url: /prickly-pear-guide
      - listitem [ref=e20]:
        - generic [ref=e21]: /
        - link "Recipes" [ref=e22] [cursor=pointer]:
          - /url: /prickly-pear-guide#recipes
      - listitem [ref=e23]:
        - generic [ref=e24]: /
        - generic [ref=e25]: Arizona Sunrise Muffins with Prickly Pear Jelly
  - main [ref=e26]:
    - generic [ref=e27]:
      - img "Arizona Sunrise Muffins with prickly pear jelly centers on a rustic board" [ref=e29]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - paragraph [ref=e33]: Homemade muffin recipe
          - heading "Arizona Sunrise Muffins with Prickly Pear Jelly" [level=1] [ref=e34]
          - paragraph [ref=e35]: Golden homemade muffins with a bright prickly pear jelly center — based on Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - list "Recipe highlights" [ref=e36]:
            - listitem [ref=e37]: Homemade muffins
            - listitem [ref=e38]: Prickly pear jelly filling
            - listitem [ref=e39]: 400°F / 375°F convection
            - listitem [ref=e40]: 20–25 minutes
          - generic [ref=e41]:
            - link "Jump to Recipe" [ref=e42] [cursor=pointer]:
              - /url: "#recipe-card"
            - link "Get the Prickly Pear Jelly (opens in new tab)" [active] [ref=e43] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get the Prickly Pear Jelly
              - generic [ref=e44]: (opens in new tab)
        - img "Prickly pear jelly visible inside a sliced homemade muffin" [ref=e46]
    - region [ref=e47]:
      - generic [ref=e48]:
        - img "Prickly pear jelly visible inside a sliced homemade muffin" [ref=e50]
        - generic [ref=e51]:
          - heading "What Are Arizona Sunrise Muffins?" [level=2] [ref=e52]
          - generic [ref=e53]:
            - paragraph [ref=e54]: Arizona Sunrise Muffins are golden homemade muffins with a bright prickly pear jelly center that appears when you bite or slice into them.
            - paragraph [ref=e55]: "This walkthrough follows Cheri's Desert Harvest's Arizona Sunrise Muffins recipe: fill muffin tins half full, place 1 teaspoon of prickly pear jelly in the exact center (keeping jelly away from the edges), cover with remaining batter, and bake until golden."
            - paragraph [ref=e56]: The result is a soft muffin with a glossy, fruit-forward surprise inside — a simple technique that works well for breakfast, brunch, or a Southwest-themed spread.
    - region [ref=e57]:
      - generic [ref=e58]:
        - generic [ref=e59]:
          - heading "Why Use Prickly Pear Jelly?" [level=2] [ref=e60]
          - generic [ref=e61]:
            - paragraph [ref=e62]: Prickly pear jelly is a jelly made using prickly pear cactus fruit. It adds a distinctive fruit note and a vivid color to the muffin center without changing the basic muffin batter.
            - paragraph [ref=e63]: Prickly pear is often described as fruity and distinctive, but flavor varies by fruit and preparation. In muffins, the jelly stays soft and glossy when sealed inside the batter.
            - paragraph [ref=e64]: You can substitute another jam or jelly if needed, though prickly pear jelly gives these muffins their signature Southwest character.
            - paragraph [ref=e65]:
              - link "Learn more about prickly pear jelly" [ref=e66] [cursor=pointer]:
                - /url: /prickly-pear-guide
              - text: .
        - img "Prickly pear fruit halved to show vivid magenta flesh" [ref=e68]
    - region [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e72]:
          - heading "Why the Jelly Goes in the Center" [level=2] [ref=e73]
          - list [ref=e74]:
            - listitem [ref=e75]:
              - generic [ref=e77]: Fill each muffin cup about halfway with batter — do not fill to the top yet.
            - listitem [ref=e78]:
              - generic [ref=e80]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter.
            - listitem [ref=e81]:
              - generic [ref=e83]: Keep the jelly away from the edges of the cup so it stays sealed inside.
            - listitem [ref=e84]:
              - generic [ref=e86]: Spoon remaining batter over the jelly to cover it completely.
            - listitem [ref=e87]:
              - generic [ref=e89]: Tins should be about two-thirds full before baking.
            - listitem [ref=e90]:
              - generic [ref=e92]: Bake until the tops are golden.
        - generic [ref=e94]:
          - heading "Common Mistakes" [level=2] [ref=e95]
          - list [ref=e96]:
            - listitem [ref=e97]:
              - generic [ref=e99]: Putting jelly against the muffin edge — it can leak out during baking.
            - listitem [ref=e100]:
              - generic [ref=e102]: Overfilling the cup — batter needs room to rise without overflowing.
            - listitem [ref=e103]:
              - generic [ref=e105]: Using too much jelly — 1 teaspoon per muffin is enough; more can burst through.
            - listitem [ref=e106]:
              - generic [ref=e108]: Not sealing the jelly with enough batter — the top layer should fully cover the jelly.
        - generic [ref=e110]:
          - heading "How to Get a Clean Jelly Center" [level=2] [ref=e111]
          - list [ref=e112]:
            - listitem [ref=e113]:
              - generic [ref=e115]: Use room-temperature jelly so it spreads easily into a small mound in the center.
            - listitem [ref=e116]:
              - generic [ref=e118]: Press the jelly gently into the batter rather than pushing it to the side.
            - listitem [ref=e119]:
              - generic [ref=e121]: Fill the top layer of batter evenly so no jelly peeks through before baking.
            - listitem [ref=e122]:
              - generic [ref=e124]: Let muffins cool in the pan briefly, then transfer to a rack — cutting while hot can make the center run.
    - region [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - heading "Ingredients" [level=2] [ref=e128]
          - paragraph [ref=e129]: A short pantry list for homemade muffins with a prickly pear jelly center.
        - list [ref=e131]:
          - listitem [ref=e132]:
            - paragraph [ref=e133]: 2 cups all-purpose flour
          - listitem [ref=e134]:
            - paragraph [ref=e135]: 1/4 cup sugar
          - listitem [ref=e136]:
            - paragraph [ref=e137]: 3 tsp baking powder
          - listitem [ref=e138]:
            - paragraph [ref=e139]: 1/2 tsp salt
          - listitem [ref=e140]:
            - paragraph [ref=e141]: 1/4 cup vegetable oil
          - listitem [ref=e142]:
            - paragraph [ref=e143]: 1 egg, slightly beaten
          - listitem [ref=e144]:
            - paragraph [ref=e145]: 1 cup milk
          - listitem [ref=e146]:
            - paragraph [ref=e147]: 1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly
            - paragraph [ref=e148]: source recipe; 1 tsp per muffin
        - generic [ref=e149]:
          - paragraph [ref=e150]: Ingredients listed above follow Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - paragraph [ref=e151]: The original Cheri's Desert Harvest recipe calls for an 8-ounce jar of prickly pear jelly. The product shown on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - heading "How to Make Arizona Sunrise Muffins" [level=2] [ref=e155]
          - paragraph [ref=e156]: Preheat to 400°F (standard) or 375°F (convection). Bake 20–25 minutes until golden.
        - list [ref=e158]:
          - listitem [ref=e159]:
            - generic [ref=e160]: "1"
            - heading "Preheat and Prepare Dry Ingredients" [level=4] [ref=e161]
            - paragraph [ref=e162]: Preheat the oven to 400°F (standard) or 375°F (convection). Line a muffin tin with paper liners. Sift together the flour, sugar, baking powder, and salt in a large bowl.
          - listitem [ref=e163]:
            - generic [ref=e164]: "2"
            - heading "Mix the Wet Ingredients" [level=4] [ref=e165]
            - paragraph [ref=e166]: In a separate bowl, whisk the vegetable oil, slightly beaten egg, and milk until frothy.
          - listitem [ref=e167]:
            - generic [ref=e168]: "3"
            - heading "Combine Batter" [level=4] [ref=e169]
            - paragraph [ref=e170]: Pour the wet mixture into the dry ingredients and stir until moistened. The batter will be lumpy — do not overmix.
          - listitem [ref=e171]:
            - generic [ref=e172]: "4"
            - heading "Fill the Muffin Cups" [level=4] [ref=e173]
            - paragraph [ref=e174]: Fill muffin tins half full with batter.
          - listitem [ref=e175]:
            - generic [ref=e176]: "5"
            - heading "Add the Prickly Pear Jelly" [level=4] [ref=e177]
            - paragraph [ref=e178]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter in each cup, keeping the jelly away from the edges.
          - listitem [ref=e179]:
            - generic [ref=e180]: "6"
            - heading "Cover and Bake" [level=4] [ref=e181]
            - paragraph [ref=e182]: Cover with remaining batter. Tins should be about two-thirds full. Bake for 20–25 minutes until golden.
    - region [ref=e183]:
      - generic [ref=e184]:
        - generic [ref=e185]:
          - generic [ref=e186]:
            - paragraph [ref=e187]: Printable recipe
            - heading "Arizona Sunrise Muffins with Prickly Pear Jelly" [level=2] [ref=e188]
            - paragraph [ref=e189]: Golden homemade muffins with a bright prickly pear jelly center — based on Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
            - paragraph [ref=e190]: "Updated September 1, 2026 · Recipe concept: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe"
            - generic [ref=e191]:
              - generic [ref=e192]:
                - term [ref=e193]: "Difficulty:"
                - definition [ref=e194]: Easy
              - generic [ref=e195]:
                - term [ref=e196]: "Bake:"
                - definition [ref=e197]: 400°F / 375°F convection
              - generic [ref=e198]:
                - term [ref=e199]: "Time:"
                - definition [ref=e200]: 20–25 minutes
          - button "Print Recipe" [ref=e201] [cursor=pointer]
        - generic [ref=e202]:
          - generic [ref=e203]:
            - heading "Ingredients" [level=3] [ref=e204]
            - list [ref=e205]:
              - listitem [ref=e206]:
                - generic [ref=e208]: 2 cups all-purpose flour
              - listitem [ref=e209]:
                - generic [ref=e211]: 1/4 cup sugar
              - listitem [ref=e212]:
                - generic [ref=e214]: 3 tsp baking powder
              - listitem [ref=e215]:
                - generic [ref=e217]: 1/2 tsp salt
              - listitem [ref=e218]:
                - generic [ref=e220]: 1/4 cup vegetable oil
              - listitem [ref=e221]:
                - generic [ref=e223]: 1 egg, slightly beaten
              - listitem [ref=e224]:
                - generic [ref=e226]: 1 cup milk
              - listitem [ref=e227]:
                - generic [ref=e229]: 1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly (source recipe; 1 tsp per muffin)
            - paragraph [ref=e230]: Ingredients listed above follow Cheri's Desert Harvest's Arizona Sunrise Muffins recipe.
          - generic [ref=e231]:
            - heading "Directions" [level=3] [ref=e232]
            - list [ref=e233]:
              - listitem [ref=e234]:
                - generic [ref=e235]: "1."
                - generic [ref=e236]:
                  - paragraph [ref=e237]: Preheat and Prepare Dry Ingredients
                  - paragraph [ref=e238]: Preheat the oven to 400°F (standard) or 375°F (convection). Line a muffin tin with paper liners. Sift together the flour, sugar, baking powder, and salt in a large bowl.
              - listitem [ref=e239]:
                - generic [ref=e240]: "2."
                - generic [ref=e241]:
                  - paragraph [ref=e242]: Mix the Wet Ingredients
                  - paragraph [ref=e243]: In a separate bowl, whisk the vegetable oil, slightly beaten egg, and milk until frothy.
              - listitem [ref=e244]:
                - generic [ref=e245]: "3."
                - generic [ref=e246]:
                  - paragraph [ref=e247]: Combine Batter
                  - paragraph [ref=e248]: Pour the wet mixture into the dry ingredients and stir until moistened. The batter will be lumpy — do not overmix.
              - listitem [ref=e249]:
                - generic [ref=e250]: "4."
                - generic [ref=e251]:
                  - paragraph [ref=e252]: Fill the Muffin Cups
                  - paragraph [ref=e253]: Fill muffin tins half full with batter.
              - listitem [ref=e254]:
                - generic [ref=e255]: "5."
                - generic [ref=e256]:
                  - paragraph [ref=e257]: Add the Prickly Pear Jelly
                  - paragraph [ref=e258]: Place 1 teaspoon of prickly pear jelly in the exact center of the batter in each cup, keeping the jelly away from the edges.
              - listitem [ref=e259]:
                - generic [ref=e260]: "6."
                - generic [ref=e261]:
                  - paragraph [ref=e262]: Cover and Bake
                  - paragraph [ref=e263]: Cover with remaining batter. Tins should be about two-thirds full. Bake for 20–25 minutes until golden.
    - region [ref=e264]:
      - generic [ref=e266]:
        - heading "Tips for Using Prickly Pear Jelly in Muffins" [level=2] [ref=e267]
        - generic [ref=e268]:
          - paragraph [ref=e269]: 1 teaspoon of jelly per muffin matches the source recipe's placement guidance. Adjust slightly based on muffin size, but avoid overfilling.
          - paragraph [ref=e270]: If you substitute another jam, choose one with a similar consistency — thick, spoonable, and not too runny.
          - paragraph [ref=e271]: Store leftover jelly in the refrigerator after opening.
          - paragraph [ref=e272]: Explore more ways to use prickly pear jelly beyond muffins — glazes, toast, cheese boards, and cocktails all work well.
        - paragraph [ref=e273]:
          - link "Explore more ways to use prickly pear jelly" [ref=e274] [cursor=pointer]:
            - /url: /prickly-pear-guide
          - text: in our complete guide.
    - region [ref=e275]:
      - generic [ref=e276]:
        - generic [ref=e277]:
          - heading "About the jelly in this recipe" [level=2] [ref=e278]
          - paragraph [ref=e279]: Packaged product reference for the 5 oz jar used in the topping above. Cheri's Desert Harvest Prickly Pear Cactus Jelly — 5 OZ / 140g (ASIN B000MBM8T8).
        - generic [ref=e280]:
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e282]
          - generic [ref=e283]:
            - paragraph [ref=e284]: Cheri's Desert Harvest
            - heading "Prickly Pear Cactus Jelly" [level=3] [ref=e285]
            - paragraph [ref=e286]: 5 OZ / 140g
            - generic [ref=e287]:
              - heading "Ingredients" [level=4] [ref=e288]
              - list [ref=e289]:
                - listitem [ref=e290]: Organic Prickly Pear Cactus
                - listitem [ref=e291]: Organic Lemon Juice
                - listitem [ref=e292]: Pure Cane Sugar
                - listitem [ref=e293]: Citrus Pectin
                - listitem [ref=e294]: Citric Acid
            - list "Package attributes" [ref=e295]:
              - listitem [ref=e296]: Made in USA
              - listitem [ref=e297]: Contains Fresh Fruit Juices
              - listitem [ref=e298]: No Artificial Colors
              - listitem [ref=e299]: No Preservatives
            - generic [ref=e300]:
              - link "View on Amazon (opens in new tab)" [ref=e301] [cursor=pointer]:
                - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
                - text: View on Amazon
                - generic [ref=e302]: (opens in new tab)
              - paragraph [ref=e303]:
                - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
                - link "View ingredients" [ref=e304] [cursor=pointer]:
                  - /url: "#transparency"
                - text: ·
                - link "Explore serving ideas" [ref=e305] [cursor=pointer]:
                  - /url: "#ways-to-use"
    - complementary [ref=e306]:
      - generic [ref=e307]:
        - heading "Recipe source & product disclosure" [level=2] [ref=e308]
        - paragraph [ref=e309]: "Recipe source: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe. This page is an independent recipe and educational page and is not the official Cheri's Desert Harvest website. The author/operator may earn from sales of the product linked below."
        - paragraph [ref=e310]: The original Cheri's Desert Harvest recipe calls for an 8-ounce jar of prickly pear jelly. The product shown on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e311]:
      - generic [ref=e312]:
        - generic [ref=e313]:
          - heading "More ways to use prickly pear jelly" [level=2] [ref=e314]
          - paragraph [ref=e315]: After muffins, try these ideas from the Prickly Pear Guide.
        - list [ref=e316]:
          - listitem [ref=e318]:
            - link [ref=e319] [cursor=pointer]:
              - /url: /prickly-pear-guide
              - heading "Prickly Pear Guide" [level=3] [ref=e320]
              - paragraph [ref=e321]: Learn more about prickly pear jelly — what it is, how it tastes, and seven ways to use it.
          - listitem [ref=e323]:
            - link [ref=e324] [cursor=pointer]:
              - /url: /recipes/classic-prickly-pear-cheesecake
              - heading "Classic Prickly Pear Cheesecake" [level=3] [ref=e325]
              - paragraph [ref=e326]: Make a creamy cheesecake with a sour cream and prickly pear jelly topping using one 5 oz jar.
          - listitem [ref=e328]:
            - link [ref=e329] [cursor=pointer]:
              - /url: /prickly-pear-guide#uses
              - heading "Glaze for grilled meats" [level=3] [ref=e330]
              - paragraph [ref=e331]: Brush warmed jelly onto pork chops or chicken during the last minutes of grilling.
          - listitem [ref=e333]:
            - link [ref=e334] [cursor=pointer]:
              - /url: /prickly-pear-guide#uses
              - heading "Cheese board accent" [level=3] [ref=e335]
              - paragraph [ref=e336]: Pair with soft cheeses and crackers for a Southwest-inspired spread.
        - link "Explore the Prickly Pear Guide" [ref=e338] [cursor=pointer]:
          - /url: /prickly-pear-guide
    - region [ref=e339]:
      - generic [ref=e340]:
        - heading "Frequently Asked Questions" [level=2] [ref=e341]
        - paragraph [ref=e342]: Practical answers about the muffins and prickly pear jelly.
        - generic [ref=e343]:
          - group [ref=e344]:
            - generic [ref=e345] [cursor=pointer]:
              - term [ref=e346]: What are Arizona Sunrise Muffins?
              - generic [ref=e347]: +
            - definition [ref=e348]:
              - paragraph [ref=e349]: Arizona Sunrise Muffins are homemade muffins with a prickly pear jelly center. The recipe comes from Cheri's Desert Harvest — you fill muffin tins half full, add 1 teaspoon of jelly in the exact center, cover with batter, and bake until golden.
          - group [ref=e350]:
            - generic [ref=e351] [cursor=pointer]:
              - term [ref=e352]: How do you put jelly inside a muffin?
              - generic [ref=e353]: +
          - group [ref=e354]:
            - generic [ref=e355] [cursor=pointer]:
              - term [ref=e356]: How much prickly pear jelly should you put in a muffin?
              - generic [ref=e357]: +
          - group [ref=e358]:
            - generic [ref=e359] [cursor=pointer]:
              - term [ref=e360]: What does prickly pear jelly taste like?
              - generic [ref=e361]: +
          - group [ref=e362]:
            - generic [ref=e363] [cursor=pointer]:
              - term [ref=e364]: Can I use another jam instead of prickly pear jelly?
              - generic [ref=e365]: +
          - group [ref=e366]:
            - generic [ref=e367] [cursor=pointer]:
              - term [ref=e368]: What temperature do you bake these muffins at?
              - generic [ref=e369]: +
          - group [ref=e370]:
            - generic [ref=e371] [cursor=pointer]:
              - term [ref=e372]: How long do Arizona Sunrise Muffins bake?
              - generic [ref=e373]: +
          - group [ref=e374]:
            - generic [ref=e375] [cursor=pointer]:
              - term [ref=e376]: What is prickly pear jelly?
              - generic [ref=e377]: +
          - group [ref=e378]:
            - generic [ref=e379] [cursor=pointer]:
              - term [ref=e380]: Where can I buy prickly pear jelly?
              - generic [ref=e381]: +
    - region [ref=e382]:
      - generic [ref=e383]:
        - generic [ref=e384]:
          - heading "Ready for a little prickly-pear surprise?" [level=2] [ref=e385]
          - paragraph [ref=e386]: Bake the muffins, try the jelly center, then explore more ways to use prickly pear jelly.
          - generic [ref=e387]:
            - link "Get Prickly Pear Jelly (opens in new tab)" [ref=e388] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get Prickly Pear Jelly
              - generic [ref=e389]: (opens in new tab)
            - link "Explore More Prickly Pear Recipes" [ref=e390] [cursor=pointer]:
              - /url: /prickly-pear-guide
          - paragraph [ref=e391]:
            - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
            - link "View ingredients" [ref=e392] [cursor=pointer]:
              - /url: "#transparency"
            - text: ·
            - link "Explore serving ideas" [ref=e393] [cursor=pointer]:
              - /url: "#ways-to-use"
        - generic [ref=e394]:
          - img "Editorial photo of finished Arizona Sunrise Muffins" [ref=e396]
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e398]
  - contentinfo [ref=e399]:
    - generic [ref=e400]:
      - generic [ref=e401]:
        - generic [ref=e402]:
          - paragraph [ref=e403]: Prickly Pear Jelly Guide
          - paragraph [ref=e404]: An independent educational resource about prickly pear fruit and Cheri's Desert Harvest Prickly Pear Cactus Jelly. Product information is sourced from the product label. This site is not owned or operated by Cheri's Desert Harvest.
        - generic [ref=e405]:
          - paragraph [ref=e406]: Cheri's Desert Harvest
          - paragraph [ref=e407]: 1840 E. Winsett Street, Tucson, Arizona 85719
          - paragraph [ref=e408]:
            - link "www.CherisDesertHarvest.com" [ref=e409] [cursor=pointer]:
              - /url: https://www.CherisDesertHarvest.com
      - generic [ref=e410]:
        - paragraph [ref=e411]: Amazon availability, pricing, and promotions are subject to change.
        - paragraph [ref=e412]: © 2026 Prickly Pear Jelly Guide. This page contains links to Amazon. Product facts are based on the manufacturer's label. Not affiliated with or endorsed by Amazon or Cheri's Desert Harvest.
  - alert [ref=e413]
  - generic [ref=e415]:
    - link "View on Amazon (opens in new tab)" [ref=e416] [cursor=pointer]:
      - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
      - text: View on Amazon
      - generic [ref=e417]: (opens in new tab)
    - button "Dismiss sticky Amazon button" [ref=e418] [cursor=pointer]: Dismiss
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