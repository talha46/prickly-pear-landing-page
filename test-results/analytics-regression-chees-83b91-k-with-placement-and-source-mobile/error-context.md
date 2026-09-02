# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: analytics-regression-cheesecake.spec.ts >> Analytics regression — Classic Prickly Pear Cheesecake (local) >> hero Amazon CTA fires amazon_cta_click with placement and source
- Location: tests\analytics-regression-cheesecake.spec.ts:164:7

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
  1   | import { test, expect, type Page } from "@playwright/test";
  2   | import { AMAZON_PRODUCT_URL, SITE_URL } from "../src/config/product";
  3   | 
  4   | const RECIPE_PATH = "/recipes/classic-prickly-pear-cheesecake";
  5   | const RECIPE_URL = `${SITE_URL}${RECIPE_PATH}`;
  6   | const SELLER_URL = AMAZON_PRODUCT_URL;
  7   | const EXPECTED_META_DESCRIPTION =
  8   |   "Make a classic prickly pear cheesecake with a creamy sour-cream topping made with one 5 oz jar of prickly pear jelly.";
  9   | const SRC = "pinterest-cheesecake";
  10  | 
  11  | type GaEvent = unknown[];
  12  | 
  13  | async function enableTestAnalytics(page: Page) {
  14  |   await page.evaluate(() => {
  15  |     const w = window as Window & {
  16  |       __TEST_GA__?: boolean;
  17  |       __gaEvents?: GaEvent[];
  18  |       gtag?: (...args: unknown[]) => void;
  19  |     };
  20  |     w.__TEST_GA__ = true;
  21  |     w.__gaEvents = [];
  22  |     w.gtag = (...args: unknown[]) => {
  23  |       w.__gaEvents?.push(args);
  24  |     };
  25  |   });
  26  | }
  27  | 
  28  | async function installPersistentAnalyticsSpy(page: Page) {
  29  |   await page.addInitScript(() => {
  30  |     const w = window as Window & {
  31  |       __TEST_GA__?: boolean;
  32  |       __gaEvents?: GaEvent[];
  33  |       dataLayer?: unknown[];
  34  |     };
  35  |     w.__TEST_GA__ = true;
  36  |     w.__gaEvents = [];
  37  |     w.dataLayer = w.dataLayer || [];
  38  |     const push = w.dataLayer.push.bind(w.dataLayer);
  39  |     w.dataLayer.push = function (...args: unknown[]) {
  40  |       const entry = args[0];
  41  |       if (entry && typeof entry === "object") {
  42  |         const normalized = Array.from(entry as ArrayLike<unknown>);
  43  |         w.__gaEvents?.push(normalized);
  44  |       }
  45  |       return push.apply(w.dataLayer, args);
  46  |     };
  47  |   });
  48  | }
  49  | 
  50  | async function getGaEvents(page: Page): Promise<GaEvent[]> {
  51  |   return page.evaluate(
  52  |     () =>
  53  |       (window as Window & { __gaEvents?: GaEvent[] }).__gaEvents ?? []
  54  |   );
  55  | }
  56  | 
  57  | async function clickAmazonAndAssert(
  58  |   page: Page,
  59  |   clickTarget: ReturnType<Page["getByRole"]>,
  60  |   expected: { placement: string; source: string }
  61  | ) {
  62  |   await page.route("**/googletagmanager.com/**", (route) => route.abort());
  63  |   await enableTestAnalytics(page);
  64  |   await expect(clickTarget).toHaveAttribute("href", SELLER_URL);
  65  |   const popupPromise = page.waitForEvent("popup");
  66  |   await clickTarget.click();
  67  |   const popup = await popupPromise;
  68  |   await expect(popup).toHaveURL(SELLER_URL);
  69  | 
  70  |   await expect
  71  |     .poll(async () => {
  72  |       const events = await getGaEvents(page);
  73  |       return events.some(
  74  |         (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  75  |       );
  76  |     })
> 77  |     .toBe(true);
      |      ^ Error: expect(received).toBe(expected) // Object.is equality
  78  | 
  79  |   const amazonClick = (await getGaEvents(page)).find(
  80  |     (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  81  |   );
  82  | 
  83  |   expect(amazonClick?.[2]).toMatchObject({
  84  |     placement: expected.placement,
  85  |     source: expected.source,
  86  |   });
  87  | 
  88  |   return amazonClick;
  89  | }
  90  | 
  91  | test.describe("Analytics regression — Classic Prickly Pear Cheesecake (local)", () => {
  92  |   test("GA4 gtag script is present in server-rendered HTML when GA is configured", async ({
  93  |     request,
  94  |   }) => {
  95  |     const response = await request.get(RECIPE_PATH);
  96  |     const html = await response.text();
  97  |     expect(response.status()).toBe(200);
  98  |     expect(html).toContain("googletagmanager.com/gtag/js");
  99  |   });
  100 | 
  101 |   test("page_view fires once after load when analytics hook is active", async ({
  102 |     page,
  103 |   }) => {
  104 |     await installPersistentAnalyticsSpy(page);
  105 |     await page.goto(`${RECIPE_PATH}?src=${SRC}`);
  106 | 
  107 |     await expect
  108 |       .poll(async () => {
  109 |         const events = await getGaEvents(page);
  110 |         return events.filter(
  111 |           (entry) => entry[0] === "event" && entry[1] === "page_view"
  112 |         ).length;
  113 |       }, { timeout: 10000 })
  114 |       .toBe(1);
  115 | 
  116 |     const pageView = (await getGaEvents(page)).find(
  117 |       (entry) => entry[0] === "event" && entry[1] === "page_view"
  118 |     );
  119 |     expect(pageView?.[2]).toMatchObject({
  120 |       page_path: `${RECIPE_PATH}?src=${SRC}`,
  121 |       source: SRC,
  122 |     });
  123 |   });
  124 | 
  125 |   test("does not introduce duplicate page_view events on load", async ({
  126 |     page,
  127 |   }) => {
  128 |     await installPersistentAnalyticsSpy(page);
  129 |     await page.goto(`${RECIPE_PATH}?src=${SRC}`);
  130 |     await page.waitForTimeout(1000);
  131 | 
  132 |     const pageViews = (await getGaEvents(page)).filter(
  133 |       (entry) => entry[0] === "event" && entry[1] === "page_view"
  134 |     );
  135 |     expect(pageViews).toHaveLength(1);
  136 |   });
  137 | 
  138 |   test("initTrafficTracking stores first-touch and session source without wrapping children", async ({
  139 |     page,
  140 |   }) => {
  141 |     await page.goto(
  142 |       `${RECIPE_PATH}?src=${SRC}&utm_source=pinterest&utm_medium=social`
  143 |     );
  144 |     await expect
  145 |       .poll(async () =>
  146 |         page.evaluate(() => ({
  147 |           session: sessionStorage.getItem("ppj_session_source"),
  148 |           firstTouch: localStorage.getItem("ppj_first_touch_source"),
  149 |           utm: localStorage.getItem("ppj_utm_params"),
  150 |           initialized: sessionStorage.getItem("ppj_traffic_initialized"),
  151 |         }))
  152 |       )
  153 |       .toEqual({
  154 |         session: SRC,
  155 |         firstTouch: SRC,
  156 |         utm: JSON.stringify({
  157 |           utm_source: "pinterest",
  158 |           utm_medium: "social",
  159 |         }),
  160 |         initialized: "true",
  161 |       });
  162 |   });
  163 | 
  164 |   test("hero Amazon CTA fires amazon_cta_click with placement and source", async ({
  165 |     page,
  166 |   }) => {
  167 |     await page.goto(`${RECIPE_PATH}?src=${SRC}`);
  168 |     await clickAmazonAndAssert(
  169 |       page,
  170 |       page.getByRole("link", { name: /Get the 5 oz Prickly Pear Jelly/i }).first(),
  171 |       { placement: "recipe-hero", source: SRC }
  172 |     );
  173 |   });
  174 | 
  175 |   test("product spotlight Amazon CTA fires amazon_cta_click", async ({ page }) => {
  176 |     await page.goto(`${RECIPE_PATH}?src=${SRC}`);
  177 |     await page.locator("#product").scrollIntoViewIfNeeded();
```