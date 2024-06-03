# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.3](https://github.com/spectr-e/kodisha/compare/v0.1.2...v0.1.3) (2024-06-03)


### Features

* Added keys to authenticate our mongodb connection ([ca0ba44](https://github.com/spectr-e/kodisha/commit/ca0ba446e541f57543e93f1f821c5f1c6b51277a))
* **api/properties:** Generate starter files for the properties api ([b3131f7](https://github.com/spectr-e/kodisha/commit/b3131f7916ce3c15a017b938a4c385672218e61b))
* **component/PropHeadImg:** Create a seperate component for the header image ([81cd357](https://github.com/spectr-e/kodisha/commit/81cd357c3cea92651613b31330a47be7b36cc977))
* **components/HomeProps:** Add component to handle the properties listings on the homepage ([c907691](https://github.com/spectr-e/kodisha/commit/c9076918cae7dad4579bfafe082c55fbf5bd0fce))
* **components/Spinner:** Add a loading spinner on clicking a property ([476e8b1](https://github.com/spectr-e/kodisha/commit/476e8b17c54a2625116d64917a5e4ae694b1ef31))
* **database:** Establise the db connection file ([2f474bc](https://github.com/spectr-e/kodisha/commit/2f474bce4de65826e45aaa85c7c153a026c41bc4))
* **Loading:** Implement a loading spinner ([4869605](https://github.com/spectr-e/kodisha/commit/4869605c7c626762d3da88290f4c2d6d500d491e))
* **model/Property:** Create the property model ([cb9fb5a](https://github.com/spectr-e/kodisha/commit/cb9fb5a6d9de7d14c9042410750bc8fa36012ca6))
* **model:** Create the user schema ([ceb7cc2](https://github.com/spectr-e/kodisha/commit/ceb7cc27c00b51ae0010de238d23662aaf9efd24))
* **NextAuth:** Create two files: authOptions and NextAuth route ([561aebd](https://github.com/spectr-e/kodisha/commit/561aebdf5254c19deaa8a9a1645b72957c39a547))
* **NotFound:** Generate starter code for the custom not found page ([9245db6](https://github.com/spectr-e/kodisha/commit/9245db656ffa92e4003bc244c4d5face8df38777))
* **Properties:** Add page to handle single property display ([3783391](https://github.com/spectr-e/kodisha/commit/378339155b170c6863de8ed5854e3aa4bc0fc3de))
* **utils:** Fetch single property from database ([8a593c7](https://github.com/spectr-e/kodisha/commit/8a593c7c1d02067efb990a30e0498a0654bbf4ef))


### Bug Fixes

* **AddProp:** Add form control to first five fields ([4858293](https://github.com/spectr-e/kodisha/commit/4858293cf65b662a1ecceab868e50762668edf33))
* **AddProp:** Add form control to the remaining fields ([56e1529](https://github.com/spectr-e/kodisha/commit/56e15291e43a9917a0ef2012795576eceb437564))
* **AddProp:** Build a property data object containing all fields that will be sent to db ([d83b51b](https://github.com/spectr-e/kodisha/commit/d83b51bb8a84f09dcf91de08f8c9343e57379e7d))
* **AddProp:** Build amenities & images object that wiill be sent to the db ([7d6db96](https://github.com/spectr-e/kodisha/commit/7d6db9666b522004b12f642a7a78658085c3ff9d))
* **AddProp:** Create a fields state var with dummy data ([02a67c1](https://github.com/spectr-e/kodisha/commit/02a67c11b4ccccb75eb23a919963509df2aa1014))
* **AddProp:** Edit the handle amenities change function to save data to state ([27283f3](https://github.com/spectr-e/kodisha/commit/27283f30a5d18b0b370c8b3503e78502eeb15399))
* **AddProp:** Edit the handle change function to save data to state ([04d83ec](https://github.com/spectr-e/kodisha/commit/04d83ec8a8c4ead3f9843b370a41b21ce1193f79))
* **AddProp:** Edit the handle image change function to save data to state ([5f4d2ee](https://github.com/spectr-e/kodisha/commit/5f4d2ee43227a56230c44c247b47faf8ce4301ed))
* **AddProp:** Handle submission using actions and methods, creaete a post function api ([f95e718](https://github.com/spectr-e/kodisha/commit/f95e7184e62c5774453d1f2c8822d5f9fba6dfd0))
* **AddProp:** Import the theme code, fix jsx ([dc96e32](https://github.com/spectr-e/kodisha/commit/dc96e329a340027221a8cfea5f102d33eae8ee65))
* **AddProp:** Remove checked fields placed erroneously ([3558d31](https://github.com/spectr-e/kodisha/commit/3558d3125d2905ffc13cda77b32c5da0f6378b8c))
* **api/properties:** Edit to fetch data from the database ([b3f2803](https://github.com/spectr-e/kodisha/commit/b3f28031798f0eca739a90234ee81030ceee2906))
* **app:** Allow entire app to have access to the session data and status ([50f70a0](https://github.com/spectr-e/kodisha/commit/50f70a0690f4af5e49982128902c5c9230e8afda))
* **authOptions:** Add a callback funciton with only commented instructions ([ffa5612](https://github.com/spectr-e/kodisha/commit/ffa5612b2309cfc9d7eb0d4c42a972350de71269))
* **authOptions:** Add authorization to enable login of different accounts ([e30b36b](https://github.com/spectr-e/kodisha/commit/e30b36b5daaf5c48e135300283f48f73a11da0a9))
* **authOptions:** Add GoogleProvider creds ([457867d](https://github.com/spectr-e/kodisha/commit/457867d97cb2a40277c1c31dae1e40ea85d7eb1b))
* **AuthOptions:** Add user signin callback with option to add to db ([0f18ba0](https://github.com/spectr-e/kodisha/commit/0f18ba0825cc92d2022f6a817e6c26b2cbd110b3))
* **AuthOptions:** Modify session object to add user to session on signin ([9c1fa90](https://github.com/spectr-e/kodisha/commit/9c1fa904c5719bcd5f87176802cb08e9e0170d24))
* **AuthProvider:** Convert it into a client component! ([2c64e21](https://github.com/spectr-e/kodisha/commit/2c64e21177ea5b684d82c6545d9156c6d28e43b1))
* **component/PropHeadImg:** Add the header image ([39048e6](https://github.com/spectr-e/kodisha/commit/39048e6ca663852c3be0b31912cab009171571ab))
* **components/HomeProps:** Display a view all properties button at the bottom ([52e3df9](https://github.com/spectr-e/kodisha/commit/52e3df9378030f80751af3512cf728121377bee6))
* **components/HomeProps:** Display only 3 random properties on the features page ([6d77443](https://github.com/spectr-e/kodisha/commit/6d7744375b85ca23b38c8799aa77b723debb3467))
* **database:** Edit the import to correct typo ([198cfb7](https://github.com/spectr-e/kodisha/commit/198cfb77feecd077e9ea2db44b8e7e7afa1bd71d))
* Edit property id to include _ prefix ([46bdc34](https://github.com/spectr-e/kodisha/commit/46bdc34a7d1c2d7cfd9a7b2514f4a2382ce1c38e))
* **HomePage:** Import data from mongodb instead of local ([15c28d9](https://github.com/spectr-e/kodisha/commit/15c28d97194766141ca88eb13c6fec4092c9f312))
* **model:** Export the model ([1703934](https://github.com/spectr-e/kodisha/commit/1703934013feb712d381fe333bd31b40a28569b0))
* **models:** Align schema with the data imported, remove unecessary 'required' attribs ([a98b0b8](https://github.com/spectr-e/kodisha/commit/a98b0b807cc1e8416b6ffe26ebd52fc3a8c57216))
* **NavBar:** Add a dropdown menu close function onclick ([d1d3434](https://github.com/spectr-e/kodisha/commit/d1d343468d251febba808d0b7cf53eb58dd07f9f))
* **NavBar:** Add protection to sensitive routes using middleware ([cd8590d](https://github.com/spectr-e/kodisha/commit/cd8590d40452286f0f95615b6d72bcda251cc4ae))
* **NavBar:** Add the ability to signout from account ([a33d83a](https://github.com/spectr-e/kodisha/commit/a33d83aec90b698c7123f82eb99ba0a2cbbb2b35))
* **NavBar:** Edit auth button to redirect to google page on moblie nav ([0b21be0](https://github.com/spectr-e/kodisha/commit/0b21be040e7f0a61a3e67eaa11df47d5cb1e6171))
* **NavBar:** Edit isLogged in state to reflect session data ([a3417b4](https://github.com/spectr-e/kodisha/commit/a3417b47a79865630cb63907ec8d5a28b4d2d3ae))
* **NavBar:** Edit signin button to redirect to google signin page onclick ([ff650b6](https://github.com/spectr-e/kodisha/commit/ff650b621f8e2f30558284e0b4a4a33a38535dcb))
* **NavBar:** Replace user avatar with google account image modify the config file to include google hostname ([4dbc348](https://github.com/spectr-e/kodisha/commit/4dbc3482be2e332b3deac5a75b97e6c827657803))
* **NextAuth:** Add a handler functoin ([6df1364](https://github.com/spectr-e/kodisha/commit/6df1364f6d1652039a0e8bf283b7f22f4b38f7d4))
* **NotFound:** Edit html to jsx +  add react icon ([6b73b69](https://github.com/spectr-e/kodisha/commit/6b73b696fdfad81ab11a6f8ac6f4ee973ebf4ca7))
* **NotFound:** Import the default theme files ([9c8a392](https://github.com/spectr-e/kodisha/commit/9c8a39258998e324cd1a371aeecf27c2f2e7a1f5))
* **PropDetails:** Make amenities dynamic ([f107850](https://github.com/spectr-e/kodisha/commit/f107850228ca9b3a43133b1304cfd83eff959b67))
* **PropDetails:** Make description dynamic ([ea4e441](https://github.com/spectr-e/kodisha/commit/ea4e441fcd006798ffe0d67b065214d2b8e3d8c4))
* **PropDetails:** Make the monthly and weekly rate display dynamic + adding comments ([a62e0e4](https://github.com/spectr-e/kodisha/commit/a62e0e4473d38fc28c0a2e1ae5be8612c2f92ae1))
* **PropDetails:** Make the nightly rate display dynamic ([84fd427](https://github.com/spectr-e/kodisha/commit/84fd427b383a089de9a37666d530cddb458d7ec9))
* **PropertiesPage:** Import data from mongodb instead of local ([0074e1c](https://github.com/spectr-e/kodisha/commit/0074e1c03095df3be0dd149fea833ae8206b83a6))
* **Property:** Add back btn and the property info section ([a43a94a](https://github.com/spectr-e/kodisha/commit/a43a94a8f6e1c83fd71a16e934c15a426f5ca01a))
* **Property:** Add function to fetch data from mongodb ([eb308f4](https://github.com/spectr-e/kodisha/commit/eb308f4919625779bca2d6448f38dd3315701fe2))
* **Property:** Fix classname typo on the no property found error ([9eec099](https://github.com/spectr-e/kodisha/commit/9eec09930a905610eb501e725de11984d28ef563))
* **property:** Handle property not found ([63259df](https://github.com/spectr-e/kodisha/commit/63259df37e4061b3abf63f80f91e29ce5b077541))
* **Property:** Import react icons in the props section ([8bf187b](https://github.com/spectr-e/kodisha/commit/8bf187be124ed99a88763e0185c1b0c89f669ffa))
* **Property:** Import react icons in the rates ([04e1f0a](https://github.com/spectr-e/kodisha/commit/04e1f0af18f06f0fcb8f458c235084b0a45f8679))
* **Property:** Place the grid columns of the property section side by side ([b0ff4fd](https://github.com/spectr-e/kodisha/commit/b0ff4fdb168b641315e7c2c83978029edee7188c))
* Update export on Property model, details now loading ([c63275d](https://github.com/spectr-e/kodisha/commit/c63275d2d4d55cdb4a5dbe8b4d2f998d7e8387ee))
* **User:** Modify the export name to capital U to prevent overwrite errors ([7ea8f19](https://github.com/spectr-e/kodisha/commit/7ea8f19e182b91c33ae379c34563059826a9ee49))
* **utils:** Fetch single property from database ([f519f1f](https://github.com/spectr-e/kodisha/commit/f519f1fb31bf6c00c9ca42b4bfe9ceb148ddc1e5))
* **utils:** Handle case where public domain is not available on deployment ([b8d1a80](https://github.com/spectr-e/kodisha/commit/b8d1a80c918cfb9b31f9cb67e85ae472f7aeceb0))

### [0.1.2](https://github.com/spectr-e/kodisha/compare/v0.1.1...v0.1.2) (2024-05-22)


### Features

* **assets:** Bring in the properties data ([933ffc2](https://github.com/spectr-e/kodisha/commit/933ffc2cf6477d70f7989e7ba62e68cd9b740838))
* **assets:** Bring in the properties images ([695bd51](https://github.com/spectr-e/kodisha/commit/695bd515641390ef094280d90cb7b75c45506864))
* **assets:** Move the properties into its own folder ([f75cc7a](https://github.com/spectr-e/kodisha/commit/f75cc7a8d7ff2727e3ec5d22190332dcb612c689))
* **components/PropCard:** Create a card to display a property's details ([eb96b02](https://github.com/spectr-e/kodisha/commit/eb96b0253813a1e4c0d55849594f696149616d48))
* **Footer:** Generate starter code for the footer and import to main app ([b4ca986](https://github.com/spectr-e/kodisha/commit/b4ca98690f9b3bb39d5fa36fd6f511329b07d40d))
* **InfoBox:** Create dynamic code for infoboxes ([ad650cf](https://github.com/spectr-e/kodisha/commit/ad650cf6e51f278b0865a751c27c6389fab58644))


### Bug Fixes

* **assets:** Remove all the properties to public ([3f9acad](https://github.com/spectr-e/kodisha/commit/3f9acad8a465dc9d67bbdcc1cac47fc674fac636))
* **component/PropCard:** Display the location dynamically ([705d20a](https://github.com/spectr-e/kodisha/commit/705d20ae298fef30fda84604c9cd8ec7494254d1))
* **component/PropCard:** Display the type of charges dynamically ([6d931e3](https://github.com/spectr-e/kodisha/commit/6d931e3802496c7d851f407775dd904be8f1e85f))
* **component/PropCard:** Make some content dynamic ([492cfc2](https://github.com/spectr-e/kodisha/commit/492cfc2fffe85e5b41f47f8497328c0c9f21efc5))
* **component/PropCard:** Make the amenities display dynamic ([ec43551](https://github.com/spectr-e/kodisha/commit/ec4355108aab680e8712d9e36be6b71d217338bb))
* **component/PropCard:** Make the rate display dynamic ([ec15c95](https://github.com/spectr-e/kodisha/commit/ec15c9586ae04c6f0550a85532255d3ffaa38e75))
* **components/PropCard:** Edit the code to change html into jsx & import react-icons ([027fa2c](https://github.com/spectr-e/kodisha/commit/027fa2cc2c4f111c2fe114d3e47cd016af7c167e))
* **data:** Update the apartment image ref names in the json file ([0a23b32](https://github.com/spectr-e/kodisha/commit/0a23b32e6f0067f39a13de40a041f7488fec7891))
* **Footer:** Get rid of links & make the year dynamic ([e59a984](https://github.com/spectr-e/kodisha/commit/e59a984cb7b239fd377eaf900c946d6ae246f533))
* **Footer:** Import defautl theme code with appropriate changes ([4c3f94b](https://github.com/spectr-e/kodisha/commit/4c3f94b4b6af98bf8705dd7d14f6d334d1fb12cc))
* **InfoBoxes:** Refactor the code to include infobox component ([58a3342](https://github.com/spectr-e/kodisha/commit/58a3342754ccbbd4cd027cd0949ea43ef3d44238))
* **Layout:** Import footer into file, remove from homepage ([1804dab](https://github.com/spectr-e/kodisha/commit/1804dab87a8c53187a63184aad79f18b28ce5520))
* **Properties:** Import properties data & do a dummy display ([fd7aacb](https://github.com/spectr-e/kodisha/commit/fd7aacbd42482dfb4ea11526475331a81ef1fbd0))

### 0.1.1 (2024-05-22)


### Features

* Add app metadata in the main layout ([40ab1f9](https://github.com/spectr-e/kodisha/commit/40ab1f901f05a63ca54beb8c0e99fb8e3137a4ec))
* **app:** Create a home page ([3ea6cab](https://github.com/spectr-e/kodisha/commit/3ea6cabe960577512ba2ce0730c305db6e828e29))
* **app:** Create the main layout of the app ([0fec2a1](https://github.com/spectr-e/kodisha/commit/0fec2a1f97c5be0e3ae62dda32608793263e9880))
* **assets:** Add logos into the project ([9dc4ae4](https://github.com/spectr-e/kodisha/commit/9dc4ae4e51bc7e97f300ef50149c2c77a5026d70))
* Generate the starter files for the project using next js ([af58d76](https://github.com/spectr-e/kodisha/commit/af58d76a59d7961cd5ba02b2e79970cf2c9bd5b1))
* **Hero:** Generate and import starter code for hero component ([6feccd5](https://github.com/spectr-e/kodisha/commit/6feccd5e0332221282d1ac8f8b69e7af1dcda542))
* **InfoBoxes:** Create component and Import its theme code ([3accca6](https://github.com/spectr-e/kodisha/commit/3accca6d61de814465a3815443cbdb4e370b07d5))
* **Properties:** Create properties listing and add page structure ([6533762](https://github.com/spectr-e/kodisha/commit/65337625e8d51e2b7d5954af6dbe5faecc2716e0))


### Bug Fixes

* **Hero:** Import the theme code into app ([b095b94](https://github.com/spectr-e/kodisha/commit/b095b94c34a37a593f965e758828aa6e9aa682c4))
* **NavBar:** Add active links conditional rendering on desktop ([d81f653](https://github.com/spectr-e/kodisha/commit/d81f6538f8be0cb47de3cf45f8d3788a4874a48c))
* **NavBar:** Add active links conditional rendering on mobile ([7e0a64d](https://github.com/spectr-e/kodisha/commit/7e0a64ddee4e6b4dcc6493277ce4fa3b382d0834))
* **NavBar:** Add an event functions to handle menu button actions ([c0a0d6d](https://github.com/spectr-e/kodisha/commit/c0a0d6d32e4c48603eec011b8ab1fa9ebda07cde))
* **NavBar:** Add an event functions to handle profile button actions ([c9f4505](https://github.com/spectr-e/kodisha/commit/c9f4505d09c78edd443fc224328cc67e9e8d5478))
* **NavBar:** Add and import react icons into project ([32e0d50](https://github.com/spectr-e/kodisha/commit/32e0d50dc0eea68b5a832f488bee01e4c3301329))
* **NavBar:** Add both mobile and desktop navbar with white logo ([299a448](https://github.com/spectr-e/kodisha/commit/299a448898a354ea6d1bfe5cf71fd78149c6e5bc))
* **NavBar:** Add conditional rendering on protected routes based on login ([54a6edf](https://github.com/spectr-e/kodisha/commit/54a6edfa17333486f74232cacbeef03b16a768d7))
* **NavBar:** Edit to display login links on conditional ([e430776](https://github.com/spectr-e/kodisha/commit/e430776e9b163bbc0be09ca339c9a4e425f83d56))
* **NavBar:** Update all links from <a> to <Link> ([f7dc9e5](https://github.com/spectr-e/kodisha/commit/f7dc9e520b82b44d36ccc6e1f3c2de4f87369b71))
* **NavBar:** Update the href links of the navigation ([21a4e8a](https://github.com/spectr-e/kodisha/commit/21a4e8a452062eaefbd3c1bcb76fd50ab40a92c5))
