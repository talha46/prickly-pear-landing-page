# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: classic-prickly-pear-cheesecake.spec.ts >> Classic Prickly Pear Cheesecake recipe page >> Amazon CTA uses seller URL and fires analytics
- Location: tests\classic-prickly-pear-cheesecake.spec.ts:154:7

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
        - generic [ref=e25]: Classic Prickly Pear Cheesecake
  - main [ref=e26]:
    - generic [ref=e27]:
      - img "Elegant slice of classic prickly pear cheesecake with magenta topping on a white plate" [ref=e29]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - paragraph [ref=e33]: Classic dessert recipe
          - heading "Classic Prickly Pear Cheesecake" [level=1] [ref=e34]
          - paragraph [ref=e35]: A creamy classic cheesecake finished with a vibrant prickly pear jelly and sour cream topping.
          - list "Recipe highlights" [ref=e36]:
            - listitem [ref=e37]: Serves 16
            - listitem [ref=e38]: 50–55 min bake
            - listitem [ref=e39]: 4 hr chill
          - generic [ref=e40]:
            - link "Jump to Recipe" [ref=e41] [cursor=pointer]:
              - /url: "#recipe-card"
            - link "Get the 5 oz Prickly Pear Jelly (opens in new tab)" [active] [ref=e42] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get the 5 oz Prickly Pear Jelly
              - generic [ref=e43]: (opens in new tab)
        - img "Close-up of creamy prickly pear cheesecake slice with vivid magenta topping and golden crust" [ref=e45]
    - region [ref=e46]:
      - generic [ref=e47]:
        - img "Elegant slice of classic prickly pear cheesecake with magenta topping on a white plate" [ref=e49]
        - generic [ref=e50]:
          - heading "The signature topping is the star" [level=2] [ref=e51]
          - generic [ref=e52]:
            - paragraph [ref=e53]: The topping combines 16 ounces of sour cream with one entire 5 oz jar of Cheri's Prickly Pear Cactus Jelly — stirred together until the jelly breaks up and colors the cream.
            - paragraph [ref=e54]: Cheri's Desert Harvest's source recipe uses exactly one 5 oz jar, which matches the product size linked on this page.
            - paragraph [ref=e55]: The topping is prepared while the filling comes together, then poured over the baked cheesecake for a final 5-minute bake that sets the vibrant prickly pear layer.
    - region [ref=e56]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading "Why Prickly Pear Works Here" [level=2] [ref=e59]
          - generic [ref=e60]:
            - paragraph [ref=e61]: Prickly pear jelly adds a vivid magenta color that contrasts beautifully with creamy cheesecake and a golden graham cracker crust.
            - paragraph [ref=e62]: Prickly pear is often described as fruity and distinctive, but flavor varies by fruit and preparation. Mixed into sour cream, the jelly creates a visually unusual dessert with a Southwest-inspired character.
            - paragraph [ref=e63]: The jelly-sour cream combination is added after the main bake, so the topping stays glossy and distinct from the dense cheesecake filling beneath.
            - paragraph [ref=e64]:
              - link "Learn more about prickly pear jelly" [ref=e65] [cursor=pointer]:
                - /url: /prickly-pear-guide
              - text: .
        - img "Prickly pear fruit halved to show vivid magenta flesh" [ref=e67]
    - region [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e71]:
          - heading "How to Get a Smooth Topping" [level=2] [ref=e72]
          - list [ref=e73]:
            - listitem [ref=e74]:
              - generic [ref=e76]: Stir the entire 5 oz jar of prickly pear jelly into 16 oz sour cream gradually to break up jelly clumps.
            - listitem [ref=e77]:
              - generic [ref=e79]: Continue stirring periodically while preparing the filling for better incorporation and more vibrant color.
            - listitem [ref=e80]:
              - generic [ref=e82]: Keep the topping at room temperature until ready to pour — cold sour cream can make the jelly harder to blend evenly.
        - generic [ref=e84]:
          - heading "Why Keeping the Topping Separate Matters" [level=2] [ref=e85]
          - list [ref=e86]:
            - listitem [ref=e87]:
              - generic [ref=e89]: The sour cream and jelly mixture is not added until after the main cheesecake bake is complete.
            - listitem [ref=e90]:
              - generic [ref=e92]: Pour the topping immediately after removing the cheesecake from the oven, then return it for an additional 5-minute bake.
            - listitem [ref=e93]:
              - generic [ref=e95]: This two-stage bake sets the topping without overcooking the creamy filling beneath.
        - generic [ref=e97]:
          - heading "Chilling and Slicing" [level=2] [ref=e98]
          - list [ref=e99]:
            - listitem [ref=e100]:
              - generic [ref=e102]: Cool the cheesecake completely on a rack before removing the springform rim.
            - listitem [ref=e103]:
              - generic [ref=e105]: Refrigerate for 4 hours before serving so the filling and topping fully set.
            - listitem [ref=e106]:
              - generic [ref=e108]: For cleaner slices, use a thin sharp knife wiped clean between cuts. Optional prickly pear cactus syrup can be drizzled over each slice before serving.
    - region [ref=e109]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - heading "Ingredients" [level=2] [ref=e112]
          - paragraph [ref=e113]: Three components — crust, prickly pear topping, and creamy filling — based on Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe.
        - generic [ref=e114]:
          - generic [ref=e115]:
            - heading "Crust" [level=3] [ref=e116]
            - list [ref=e117]:
              - listitem [ref=e118]:
                - paragraph [ref=e119]: 1 package graham crackers
              - listitem [ref=e120]:
                - paragraph [ref=e121]: 1/4 cup crushed pecans
                - paragraph [ref=e122]: optional
              - listitem [ref=e123]:
                - paragraph [ref=e124]: 1 tablespoon sugar
              - listitem [ref=e125]:
                - paragraph [ref=e126]: 5 tablespoons butter, melted
          - generic [ref=e127]:
            - heading "Topping" [level=3] [ref=e128]
            - list [ref=e129]:
              - listitem [ref=e130]:
                - paragraph [ref=e131]: 16 ounces sour cream
              - listitem [ref=e132]:
                - paragraph [ref=e133]: 1 x 5 oz jar Cheri's Prickly Pear Cactus Jelly
          - generic [ref=e134]:
            - heading "Filling" [level=3] [ref=e135]
            - list [ref=e136]:
              - listitem [ref=e137]:
                - paragraph [ref=e138]: 4 x 8-ounce packages cream cheese, room temperature
                - paragraph [ref=e139]: 2 pounds total
              - listitem [ref=e140]:
                - paragraph [ref=e141]: 1 1/4 cups sugar
              - listitem [ref=e142]:
                - paragraph [ref=e143]: 2 teaspoons lemon extract
              - listitem [ref=e144]:
                - paragraph [ref=e145]: 4 eggs
        - generic [ref=e146]:
          - paragraph [ref=e147]: Ingredients listed above follow Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe. The topping uses one entire 5 oz jar of prickly pear jelly.
          - paragraph [ref=e148]: This recipe specifically calls for one 5 oz jar of Cheri's Prickly Pear Cactus Jelly in the sour cream topping. The product linked on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "How to Make Classic Prickly Pear Cheesecake" [level=2] [ref=e152]
          - paragraph [ref=e153]: "Work in three phases: crust, prickly pear topping, then cheesecake filling and bake."
        - generic [ref=e154]:
          - generic [ref=e155]:
            - heading "Phase 1 — Crust" [level=3] [ref=e156]
            - list [ref=e157]:
              - listitem [ref=e158]:
                - generic [ref=e159]: "1"
                - heading "Crush graham crackers and optional pecans" [level=4] [ref=e160]
                - paragraph [ref=e161]: Place graham crackers in a zip-lock bag and crush with a rolling pin or in a food processor. Repeat with the nuts if using.
              - listitem [ref=e162]:
                - generic [ref=e163]: "2"
                - heading "Combine crumbs, pecans and sugar" [level=4] [ref=e164]
                - paragraph [ref=e165]: Combine graham crackers, pecans and sugar in a small mixing bowl.
              - listitem [ref=e166]:
                - generic [ref=e167]: "3"
                - heading "Stir in melted butter" [level=4] [ref=e168]
                - paragraph [ref=e169]: Slowly stir in melted butter, a little at a time, until moistened.
              - listitem [ref=e170]:
                - generic [ref=e171]: "4"
                - heading "Press into springform pan" [level=4] [ref=e172]
                - paragraph [ref=e173]: Press mixture onto the bottom and halfway up the sides of a 9-inch springform pan. Set aside.
          - generic [ref=e174]:
            - heading "Phase 2 — Prickly Pear Topping" [level=3] [ref=e175]
            - list [ref=e176]:
              - listitem [ref=e177]:
                - generic [ref=e178]: "5"
                - heading "Stir jelly into sour cream" [level=4] [ref=e179]
                - paragraph [ref=e180]: Stir 1 x 5 oz jar prickly pear jelly into 16 oz sour cream to break up jelly clumps.
              - listitem [ref=e181]:
                - generic [ref=e182]: "6"
                - heading "Stir topping periodically" [level=4] [ref=e183]
                - paragraph [ref=e184]: Stir periodically while preparing the filling for better incorporation and more vibrant color. Set aside.
          - generic [ref=e185]:
            - heading "Phase 3 — Cheesecake" [level=3] [ref=e186]
            - list [ref=e187]:
              - listitem [ref=e188]:
                - generic [ref=e189]: "7"
                - heading "Beat cream cheese" [level=4] [ref=e190]
                - paragraph [ref=e191]: Using a food processor or mixer, beat cream cheese until creamy.
              - listitem [ref=e192]:
                - generic [ref=e193]: "8"
                - heading "Slowly add sugar" [level=4] [ref=e194]
                - paragraph [ref=e195]: Slowly add sugar while mixing until blended and smooth.
              - listitem [ref=e196]:
                - generic [ref=e197]: "9"
                - heading "Add lemon extract and eggs" [level=4] [ref=e198]
                - paragraph [ref=e199]: With mixer on low speed, add lemon extract and eggs, one at a time until incorporated. Pour over crust.
              - listitem [ref=e200]:
                - generic [ref=e201]: "10"
                - heading "Bake the cheesecake" [level=4] [ref=e202]
                - paragraph [ref=e203]: Bake for 50–55 minutes (45–50 minutes for convection oven).
              - listitem [ref=e204]:
                - generic [ref=e205]: "11"
                - heading "Add topping and finish baking" [level=4] [ref=e206]
                - paragraph [ref=e207]: Remove from oven and immediately pour topping onto cheesecake. Bake for 5 minutes.
              - listitem [ref=e208]:
                - generic [ref=e209]: "12"
                - heading "Cool completely" [level=4] [ref=e210]
                - paragraph [ref=e211]: Remove to cooling rack. Cool completely before removing rim.
              - listitem [ref=e212]:
                - generic [ref=e213]: "13"
                - heading "Refrigerate" [level=4] [ref=e214]
                - paragraph [ref=e215]: Refrigerate 4 hours before serving.
              - listitem [ref=e216]:
                - generic [ref=e217]: "14"
                - heading "Optional syrup drizzle" [level=4] [ref=e218]
                - paragraph [ref=e219]: If desired, drizzle Cheri's Prickly Pear Cactus Syrup on top of each slice before serving.
    - region [ref=e220]:
      - generic [ref=e221]:
        - generic [ref=e222]:
          - generic [ref=e223]:
            - paragraph [ref=e224]: Printable recipe
            - heading "Classic Prickly Pear Cheesecake" [level=2] [ref=e225]
            - paragraph [ref=e226]: A creamy classic cheesecake finished with a vibrant prickly pear jelly and sour cream topping.
            - paragraph [ref=e227]: "Updated September 2, 2026 · Recipe concept: Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe"
            - generic [ref=e228]:
              - generic [ref=e229]:
                - term [ref=e230]: "Serves:"
                - definition [ref=e231]: "16"
              - generic [ref=e232]:
                - term [ref=e233]: "Bake:"
                - definition [ref=e234]: 50–55 minutes
              - generic [ref=e235]:
                - term [ref=e236]: "Convection:"
                - definition [ref=e237]: 45–50 minutes
              - generic [ref=e238]:
                - term [ref=e239]: "Chill:"
                - definition [ref=e240]: 4 hours
          - button "Print Recipe" [ref=e241] [cursor=pointer]
        - generic [ref=e242]:
          - generic [ref=e243]:
            - heading "Ingredients" [level=3] [ref=e244]
            - generic [ref=e245]:
              - generic [ref=e246]:
                - heading "Crust" [level=4] [ref=e247]
                - list [ref=e248]:
                  - listitem [ref=e249]:
                    - generic [ref=e251]: 1 package graham crackers
                  - listitem [ref=e252]:
                    - generic [ref=e254]: 1/4 cup crushed pecans (optional)
                  - listitem [ref=e255]:
                    - generic [ref=e257]: 1 tablespoon sugar
                  - listitem [ref=e258]:
                    - generic [ref=e260]: 5 tablespoons butter, melted
              - generic [ref=e261]:
                - heading "Topping" [level=4] [ref=e262]
                - list [ref=e263]:
                  - listitem [ref=e264]:
                    - generic [ref=e266]: 16 ounces sour cream
                  - listitem [ref=e267]:
                    - generic [ref=e269]: 1 x 5 oz jar Cheri's Prickly Pear Cactus Jelly
              - generic [ref=e270]:
                - heading "Filling" [level=4] [ref=e271]
                - list [ref=e272]:
                  - listitem [ref=e273]:
                    - generic [ref=e275]: 4 x 8-ounce packages cream cheese, room temperature (2 pounds total)
                  - listitem [ref=e276]:
                    - generic [ref=e278]: 1 1/4 cups sugar
                  - listitem [ref=e279]:
                    - generic [ref=e281]: 2 teaspoons lemon extract
                  - listitem [ref=e282]:
                    - generic [ref=e284]: 4 eggs
            - paragraph [ref=e285]: Ingredients listed above follow Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe. The topping uses one entire 5 oz jar of prickly pear jelly.
          - generic [ref=e286]:
            - heading "Directions" [level=3] [ref=e287]
            - list [ref=e288]:
              - listitem [ref=e289]:
                - generic [ref=e290]: "1."
                - generic [ref=e291]:
                  - paragraph [ref=e292]: Crush graham crackers and optional pecans
                  - paragraph [ref=e293]: Place graham crackers in a zip-lock bag and crush with a rolling pin or in a food processor. Repeat with the nuts if using.
              - listitem [ref=e294]:
                - generic [ref=e295]: "2."
                - generic [ref=e296]:
                  - paragraph [ref=e297]: Combine crumbs, pecans and sugar
                  - paragraph [ref=e298]: Combine graham crackers, pecans and sugar in a small mixing bowl.
              - listitem [ref=e299]:
                - generic [ref=e300]: "3."
                - generic [ref=e301]:
                  - paragraph [ref=e302]: Stir in melted butter
                  - paragraph [ref=e303]: Slowly stir in melted butter, a little at a time, until moistened.
              - listitem [ref=e304]:
                - generic [ref=e305]: "4."
                - generic [ref=e306]:
                  - paragraph [ref=e307]: Press into springform pan
                  - paragraph [ref=e308]: Press mixture onto the bottom and halfway up the sides of a 9-inch springform pan. Set aside.
              - listitem [ref=e309]:
                - generic [ref=e310]: "5."
                - generic [ref=e311]:
                  - paragraph [ref=e312]: Stir jelly into sour cream
                  - paragraph [ref=e313]: Stir 1 x 5 oz jar prickly pear jelly into 16 oz sour cream to break up jelly clumps.
              - listitem [ref=e314]:
                - generic [ref=e315]: "6."
                - generic [ref=e316]:
                  - paragraph [ref=e317]: Stir topping periodically
                  - paragraph [ref=e318]: Stir periodically while preparing the filling for better incorporation and more vibrant color. Set aside.
              - listitem [ref=e319]:
                - generic [ref=e320]: "7."
                - generic [ref=e321]:
                  - paragraph [ref=e322]: Beat cream cheese
                  - paragraph [ref=e323]: Using a food processor or mixer, beat cream cheese until creamy.
              - listitem [ref=e324]:
                - generic [ref=e325]: "8."
                - generic [ref=e326]:
                  - paragraph [ref=e327]: Slowly add sugar
                  - paragraph [ref=e328]: Slowly add sugar while mixing until blended and smooth.
              - listitem [ref=e329]:
                - generic [ref=e330]: "9."
                - generic [ref=e331]:
                  - paragraph [ref=e332]: Add lemon extract and eggs
                  - paragraph [ref=e333]: With mixer on low speed, add lemon extract and eggs, one at a time until incorporated. Pour over crust.
              - listitem [ref=e334]:
                - generic [ref=e335]: "10."
                - generic [ref=e336]:
                  - paragraph [ref=e337]: Bake the cheesecake
                  - paragraph [ref=e338]: Bake for 50–55 minutes (45–50 minutes for convection oven).
              - listitem [ref=e339]:
                - generic [ref=e340]: "11."
                - generic [ref=e341]:
                  - paragraph [ref=e342]: Add topping and finish baking
                  - paragraph [ref=e343]: Remove from oven and immediately pour topping onto cheesecake. Bake for 5 minutes.
              - listitem [ref=e344]:
                - generic [ref=e345]: "12."
                - generic [ref=e346]:
                  - paragraph [ref=e347]: Cool completely
                  - paragraph [ref=e348]: Remove to cooling rack. Cool completely before removing rim.
              - listitem [ref=e349]:
                - generic [ref=e350]: "13."
                - generic [ref=e351]:
                  - paragraph [ref=e352]: Refrigerate
                  - paragraph [ref=e353]: Refrigerate 4 hours before serving.
              - listitem [ref=e354]:
                - generic [ref=e355]: "14."
                - generic [ref=e356]:
                  - paragraph [ref=e357]: Optional syrup drizzle
                  - paragraph [ref=e358]: If desired, drizzle Cheri's Prickly Pear Cactus Syrup on top of each slice before serving.
              - listitem [ref=e359]:
                - generic [ref=e360]: "15."
                - generic [ref=e361]:
                  - paragraph [ref=e362]: Serve
                  - paragraph [ref=e363]: Serves 16.
    - region [ref=e364]:
      - generic [ref=e366]:
        - heading "Tips for Classic Prickly Pear Cheesecake" [level=2] [ref=e367]
        - generic [ref=e368]:
          - paragraph [ref=e369]: Room-temperature cream cheese blends more smoothly and helps prevent lumps in the filling.
          - paragraph [ref=e370]: Stir the jelly into sour cream gradually and keep stirring while the filling is prepared — the color deepens as the jelly incorporates.
          - paragraph [ref=e371]: Do not skip the 4-hour chill; the cheesecake needs time to set before slicing.
          - paragraph [ref=e372]: Explore more ways to use prickly pear jelly beyond cheesecake — muffins, glazes, and cheese boards all work well.
        - paragraph [ref=e373]:
          - link "Explore more ways to use prickly pear jelly" [ref=e374] [cursor=pointer]:
            - /url: /prickly-pear-guide
          - text: in our complete guide.
    - region [ref=e375]:
      - generic [ref=e376]:
        - img "Close-up of creamy prickly pear cheesecake slice with vivid magenta topping and golden crust" [ref=e378]
        - generic [ref=e379]:
          - heading "One 5 oz jar is part of the recipe" [level=2] [ref=e380]
          - paragraph [ref=e381]: This recipe specifically calls for one 5 oz jar of Cheri's Prickly Pear Cactus Jelly in the sour cream topping.
          - list [ref=e382]:
            - listitem [ref=e383]: 16 oz sour cream
            - listitem [ref=e384]: +
            - listitem [ref=e385]: 1 x 5 oz jar prickly pear jelly
          - link "View the 5 oz Prickly Pear Jelly on Amazon (opens in new tab)" [ref=e387] [cursor=pointer]:
            - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
            - text: View the 5 oz Prickly Pear Jelly on Amazon
            - generic [ref=e388]: (opens in new tab)
    - region [ref=e389]:
      - generic [ref=e390]:
        - generic [ref=e391]:
          - heading "About the jelly in this recipe" [level=2] [ref=e392]
          - paragraph [ref=e393]: Packaged product reference for the 5 oz jar used in the topping above. Cheri's Desert Harvest Prickly Pear Cactus Jelly — 5 OZ / 140g (ASIN B000MBM8T8).
        - generic [ref=e394]:
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e396]
          - generic [ref=e397]:
            - paragraph [ref=e398]: Cheri's Desert Harvest
            - heading "Prickly Pear Cactus Jelly" [level=3] [ref=e399]
            - paragraph [ref=e400]: 5 OZ / 140g
            - generic [ref=e401]:
              - heading "Ingredients" [level=4] [ref=e402]
              - list [ref=e403]:
                - listitem [ref=e404]: Organic Prickly Pear Cactus
                - listitem [ref=e405]: Organic Lemon Juice
                - listitem [ref=e406]: Pure Cane Sugar
                - listitem [ref=e407]: Citrus Pectin
                - listitem [ref=e408]: Citric Acid
            - list "Package attributes" [ref=e409]:
              - listitem [ref=e410]: Made in USA
              - listitem [ref=e411]: Contains Fresh Fruit Juices
              - listitem [ref=e412]: No Artificial Colors
              - listitem [ref=e413]: No Preservatives
            - generic [ref=e414]:
              - link "View on Amazon (opens in new tab)" [ref=e415] [cursor=pointer]:
                - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
                - text: View on Amazon
                - generic [ref=e416]: (opens in new tab)
              - paragraph [ref=e417]:
                - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
                - link "View ingredients" [ref=e418] [cursor=pointer]:
                  - /url: "#transparency"
                - text: ·
                - link "Explore serving ideas" [ref=e419] [cursor=pointer]:
                  - /url: "#ways-to-use"
    - complementary [ref=e420]:
      - generic [ref=e421]:
        - heading "Recipe source & product disclosure" [level=2] [ref=e422]
        - paragraph [ref=e423]: "Recipe source: Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe. This page is an independent recipe and educational page and is not the official Cheri's Desert Harvest website. The author/operator may earn from sales of the product linked below."
        - paragraph [ref=e424]: This recipe specifically calls for one 5 oz jar of Cheri's Prickly Pear Cactus Jelly in the sour cream topping. The product linked on this page is the 5 oz (140g) jar available through our Amazon listing.
    - region [ref=e425]:
      - generic [ref=e426]:
        - generic [ref=e427]:
          - heading "More ways to use prickly pear jelly" [level=2] [ref=e428]
          - paragraph [ref=e429]: After muffins, try these ideas from the Prickly Pear Guide.
        - list [ref=e430]:
          - listitem [ref=e432]:
            - link [ref=e433] [cursor=pointer]:
              - /url: /prickly-pear-guide
              - heading "Prickly Pear Guide" [level=3] [ref=e434]
              - paragraph [ref=e435]: Explore more ways to use prickly pear jelly — glazes, breakfast ideas, and serving suggestions.
          - listitem [ref=e437]:
            - link [ref=e438] [cursor=pointer]:
              - /url: /recipes/arizona-sunrise-muffins
              - heading "Arizona Sunrise Muffins" [level=3] [ref=e439]
              - paragraph [ref=e440]: See the Arizona Sunrise Muffins recipe with a prickly pear jelly center.
          - listitem [ref=e442]:
            - link [ref=e443] [cursor=pointer]:
              - /url: /prickly-pear-guide#uses
              - heading "Cheese board accent" [level=3] [ref=e444]
              - paragraph [ref=e445]: Pair prickly pear jelly with soft cheeses and crackers.
        - link "Explore the Prickly Pear Guide" [ref=e447] [cursor=pointer]:
          - /url: /prickly-pear-guide
    - region [ref=e448]:
      - generic [ref=e449]:
        - heading "Frequently Asked Questions" [level=2] [ref=e450]
        - paragraph [ref=e451]: Practical answers about the muffins and prickly pear jelly.
        - generic [ref=e452]:
          - group [ref=e453]:
            - generic [ref=e454] [cursor=pointer]:
              - term [ref=e455]: What is prickly pear cheesecake?
              - generic [ref=e456]: +
            - definition [ref=e457]:
              - paragraph [ref=e458]: Prickly pear cheesecake is a classic baked cheesecake topped with a sour cream and prickly pear jelly mixture. Cheri's Desert Harvest's recipe uses one 5 oz jar of jelly stirred into 16 oz sour cream for a vibrant magenta topping.
          - group [ref=e459]:
            - generic [ref=e460] [cursor=pointer]:
              - term [ref=e461]: How do you make prickly pear cheesecake?
              - generic [ref=e462]: +
          - group [ref=e463]:
            - generic [ref=e464] [cursor=pointer]:
              - term [ref=e465]: How much prickly pear jelly goes into this cheesecake?
              - generic [ref=e466]: +
          - group [ref=e467]:
            - generic [ref=e468] [cursor=pointer]:
              - term [ref=e469]: Can I use another fruit jelly?
              - generic [ref=e470]: +
          - group [ref=e471]:
            - generic [ref=e472] [cursor=pointer]:
              - term [ref=e473]: Why is prickly pear jelly mixed with sour cream?
              - generic [ref=e474]: +
          - group [ref=e475]:
            - generic [ref=e476] [cursor=pointer]:
              - term [ref=e477]: How long does the cheesecake bake?
              - generic [ref=e478]: +
          - group [ref=e479]:
            - generic [ref=e480] [cursor=pointer]:
              - term [ref=e481]: How long should the cheesecake chill?
              - generic [ref=e482]: +
          - group [ref=e483]:
            - generic [ref=e484] [cursor=pointer]:
              - term [ref=e485]: Can I use prickly pear syrup on top?
              - generic [ref=e486]: +
          - group [ref=e487]:
            - generic [ref=e488] [cursor=pointer]:
              - term [ref=e489]: Where can I buy prickly pear jelly?
              - generic [ref=e490]: +
    - region [ref=e491]:
      - generic [ref=e492]:
        - generic [ref=e493]:
          - heading "Ready to try a cheesecake with a prickly pear twist?" [level=2] [ref=e494]
          - paragraph [ref=e495]: Make the classic topping with one 5 oz jar, then explore more prickly pear jelly recipes.
          - generic [ref=e496]:
            - link "Get the 5 oz Prickly Pear Jelly (opens in new tab)" [ref=e497] [cursor=pointer]:
              - /url: https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY
              - text: Get the 5 oz Prickly Pear Jelly
              - generic [ref=e498]: (opens in new tab)
            - link "Explore More Prickly Pear Recipes" [ref=e499] [cursor=pointer]:
              - /url: /prickly-pear-guide
          - paragraph [ref=e500]:
            - text: 5 OZ / 140g · Southwest specialty · Made in USA ·
            - link "View ingredients" [ref=e501] [cursor=pointer]:
              - /url: "#transparency"
            - text: ·
            - link "Explore serving ideas" [ref=e502] [cursor=pointer]:
              - /url: "#ways-to-use"
        - generic [ref=e503]:
          - img "Elegant slice of classic prickly pear cheesecake with magenta topping" [ref=e505]
          - img "Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar" [ref=e507]
  - contentinfo [ref=e508]:
    - generic [ref=e509]:
      - generic [ref=e510]:
        - generic [ref=e511]:
          - paragraph [ref=e512]: Prickly Pear Jelly Guide
          - paragraph [ref=e513]: An independent educational resource about prickly pear fruit and Cheri's Desert Harvest Prickly Pear Cactus Jelly. Product information is sourced from the product label. This site is not owned or operated by Cheri's Desert Harvest.
        - generic [ref=e514]:
          - paragraph [ref=e515]: Cheri's Desert Harvest
          - paragraph [ref=e516]: 1840 E. Winsett Street, Tucson, Arizona 85719
          - paragraph [ref=e517]:
            - link "www.CherisDesertHarvest.com" [ref=e518] [cursor=pointer]:
              - /url: https://www.CherisDesertHarvest.com
      - generic [ref=e519]:
        - paragraph [ref=e520]: Amazon availability, pricing, and promotions are subject to change.
        - paragraph [ref=e521]: © 2026 Prickly Pear Jelly Guide. This page contains links to Amazon. Product facts are based on the manufacturer's label. Not affiliated with or endorsed by Amazon or Cheri's Desert Harvest.
  - alert [ref=e522]
```

# Test source

```ts
  86  |   test("canonical URL is correct without tracking parameters", async ({
  87  |     page,
  88  |   }) => {
  89  |     await page.goto(RECIPE_PATH);
  90  |     await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
  91  |       "href",
  92  |       CANONICAL_URL
  93  |     );
  94  |   });
  95  | 
  96  |   test("canonical remains correct with tracking parameter", async ({ page }) => {
  97  |     await page.goto(`${RECIPE_PATH}?src=pinterest-prickly-pear-cheesecake`);
  98  |     await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
  99  |       "href",
  100 |       CANONICAL_URL
  101 |     );
  102 |   });
  103 | 
  104 |   test("Recipe JSON-LD includes 5 oz jar and matches visible content", async ({
  105 |     page,
  106 |   }) => {
  107 |     await page.goto(RECIPE_PATH);
  108 |     const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
  109 |     const parsed = scripts.map((text) => JSON.parse(text));
  110 |     const recipeSchema = parsed.find((s) => s["@type"] === "Recipe");
  111 |     const breadcrumbSchema = parsed.find((s) => s["@type"] === "BreadcrumbList");
  112 | 
  113 |     expect(recipeSchema).toBeDefined();
  114 |     expect(recipeSchema.recipeIngredient.some((i: string) => i.includes("5 oz"))).toBe(
  115 |       true
  116 |     );
  117 |     expect(recipeSchema.recipeYield).toBe("16 servings");
  118 |     expect(recipeSchema.cookTime).toBe("PT60M");
  119 |     expect(recipeSchema.totalTime).toBe("PT5H");
  120 |     expect(recipeSchema.recipeInstructions.length).toBe(15);
  121 |     expect(recipeSchema.recipeInstructions[0].text).toContain("graham crackers");
  122 |     expect(recipeSchema.recipeInstructions[4].text).toContain("5 oz jar");
  123 |     expect(recipeSchema.recipeInstructions[9].text).toContain("50–55 minutes");
  124 |     expect(recipeSchema.recipeInstructions[10].text).toContain("5 minutes");
  125 |     expect(recipeSchema.recipeInstructions[12].text).toContain("4 hours");
  126 | 
  127 |     for (const ingredient of SOURCE_INGREDIENTS) {
  128 |       expect(
  129 |         recipeSchema.recipeIngredient.some((entry: string) =>
  130 |           entry.includes(ingredient)
  131 |         )
  132 |       ).toBe(true);
  133 |     }
  134 | 
  135 |     expect(recipeSchema.aggregateRating).toBeUndefined();
  136 |     expect(recipeSchema.review).toBeUndefined();
  137 | 
  138 |     expect(breadcrumbSchema.itemListElement).toHaveLength(3);
  139 |     expect(breadcrumbSchema.itemListElement[2].item).toBe(CANONICAL_URL);
  140 |   });
  141 | 
  142 |   test("disclosure and grouped ingredients are visible", async ({ page }) => {
  143 |     await page.goto(RECIPE_PATH);
  144 |     await expect(page.locator("#recipe-disclosure")).toContainText(
  145 |       "Recipe source: Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe."
  146 |     );
  147 |     await expect(page.locator("#ingredients")).toContainText("Crust");
  148 |     await expect(page.locator("#ingredients")).toContainText("Topping");
  149 |     await expect(page.locator("#ingredients")).toContainText("Filling");
  150 |     await expect(page.locator("#directions")).toContainText("Phase 1 — Crust");
  151 |     await expect(page.locator("#directions")).toContainText("Phase 3 — Cheesecake");
  152 |   });
  153 | 
  154 |   test("Amazon CTA uses seller URL and fires analytics", async ({ page }) => {
  155 |     await page.goto(RECIPE_PATH);
  156 |     await page.evaluate(() => {
  157 |       const w = window as Window & {
  158 |         __TEST_GA__?: boolean;
  159 |         __amazonEvents?: unknown[][];
  160 |         gtag?: (...args: unknown[]) => void;
  161 |       };
  162 |       w.__TEST_GA__ = true;
  163 |       w.__amazonEvents = [];
  164 |       w.gtag = (...args: unknown[]) => {
  165 |         w.__amazonEvents?.push(args);
  166 |       };
  167 |     });
  168 | 
  169 |     const cta = page.getByRole("link", { name: /5 oz Prickly Pear Jelly/i }).first();
  170 |     await expect(cta).toHaveAttribute("href", SELLER_URL);
  171 | 
  172 |     const popupPromise = page.waitForEvent("popup");
  173 |     await cta.click();
  174 |     await popupPromise;
  175 | 
  176 |     await expect
  177 |       .poll(async () =>
  178 |         page.evaluate(() => {
  179 |           const events =
  180 |             (window as Window & { __amazonEvents?: unknown[][] }).__amazonEvents ?? [];
  181 |           return events.some(
  182 |             (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  183 |           );
  184 |         })
  185 |       )
> 186 |       .toBe(true);
      |        ^ Error: expect(received).toBe(expected) // Object.is equality
  187 |   });
  188 | 
  189 |   test("Open Graph tags exist with canonical URL", async ({ page }) => {
  190 |     await page.goto(RECIPE_PATH);
  191 |     await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
  192 |       "content",
  193 |       CANONICAL_URL
  194 |     );
  195 |     await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
  196 |       "content",
  197 |       /classic-prickly-pear-cheesecake-slice/i
  198 |     );
  199 |   });
  200 | 
  201 |   test("print stylesheet keeps recipe card content", async ({ page }) => {
  202 |     await page.goto(RECIPE_PATH);
  203 |     await page.emulateMedia({ media: "print" });
  204 |     await expect(page.locator("#printable-recipe")).toContainText(
  205 |       "Classic Prickly Pear Cheesecake"
  206 |     );
  207 |   });
  208 | 
  209 |   test("mobile viewport has no horizontal overflow", async ({ page }) => {
  210 |     await page.setViewportSize({ width: 390, height: 844 });
  211 |     await page.goto(RECIPE_PATH);
  212 |     const overflow = await page.evaluate(
  213 |       () =>
  214 |         document.documentElement.scrollWidth >
  215 |         document.documentElement.clientWidth + 1
  216 |     );
  217 |     expect(overflow).toBe(false);
  218 |   });
  219 | });
  220 | 
  221 | test.describe("Classic Prickly Pear Cheesecake site infrastructure", () => {
  222 |   test("sitemap includes canonical recipe URL", async ({ request }) => {
  223 |     const response = await request.get("/sitemap.xml");
  224 |     const body = await response.text();
  225 |     expect(body).toContain(CANONICAL_URL);
  226 |     expect(body).not.toContain("src=");
  227 |   });
  228 | 
  229 |   test("robots allows crawling", async ({ request }) => {
  230 |     const response = await request.get("/robots.txt");
  231 |     const body = await response.text();
  232 |     expect(body.toLowerCase()).toContain("allow");
  233 |     expect(body).toContain("sitemap.xml");
  234 |   });
  235 | 
  236 |   test("internal link to guide exists", async ({ page }) => {
  237 |     await page.goto(RECIPE_PATH);
  238 |     await expect(
  239 |       page.getByRole("link", { name: "Explore the Prickly Pear Guide" })
  240 |     ).toHaveAttribute("href", GUIDE_PATH);
  241 |   });
  242 | });
  243 | 
```