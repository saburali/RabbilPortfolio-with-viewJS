<template>
  <div class="lightDeepBG-2 pt-5 border-top">
    <div class="container">
      <div class="mt-4 tabs-container">
        <div class="row">
          <div class="col-md-12 col-lg-9 mb-3">
            <div class="row">
              <div class="col-md-5 col-lg-4">
                <div class="row" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div class="col-12">
                    <button
                        class="tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"
                        id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button"
                        role="tab" aria-controls="v-pills-home" aria-selected="true">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24"
                           class="text-danger bodyXLarge me-2" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg"><title></title>
                        <path
                            d="M1.6367 1.6367C.7322 1.6367 0 2.369 0 3.2734v17.4532c0 .9045.7322 1.6367 1.6367 1.6367h20.7266c.9045 0 1.6367-.7322 1.6367-1.6367V3.2734c0-.9045-.7322-1.6367-1.6367-1.6367H1.6367zm.545 2.1817h19.6367v16.3632h-2.7266v-1.0898h-4.9102v1.0898h-12V3.8184zM12 8.1816c-.9046 0-1.6367.7322-1.6367 1.6368 0 .9045.7321 1.6367 1.6367 1.6367.9046 0 1.6367-.7322 1.6367-1.6367 0-.9046-.7321-1.6368-1.6367-1.6368zm-4.3633 1.9102c-.6773 0-1.2285.5493-1.2285 1.2266 0 .6772.5512 1.2265 1.2285 1.2265.6773 0 1.2266-.5493 1.2266-1.2265 0-.6773-.5493-1.2266-1.2266-1.2266zm8.7266 0c-.6773 0-1.2266.5493-1.2266 1.2266 0 .6772.5493 1.2265 1.2266 1.2265.6773 0 1.2285-.5493 1.2285-1.2265 0-.6773-.5512-1.2266-1.2285-1.2266zM12 12.5449c-1.179 0-2.4128.4012-3.1484 1.0059-.384-.1198-.8043-.1875-1.2149-.1875-1.3136 0-2.7285.695-2.7285 1.5586v.8965h14.1836v-.8965c0-.8637-1.4149-1.5586-2.7285-1.5586-.4106 0-.831.0677-1.2149.1875-.7356-.6047-1.9694-1.0059-3.1484-1.0059Z"></path>
                      </svg>
                      Watch Free Classes
                    </button>
                  </div>
                  <div class="col-12">
                    <button
                        class="tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"
                        id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button"
                        role="tab" aria-controls="v-pills-profile" aria-selected="false">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                           class="text-danger bodyXLarge me-2" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                              d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1zM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                        </g>
                      </svg>
                      Course Features
                    </button>
                  </div>
                  <div class="col-12">
                    <button
                        class="tabs active border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"
                        id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button"
                        role="tab" aria-controls="v-pills-disabled" aria-selected="false">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                           class="text-danger bodyXLarge me-2" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                      </svg>
                      Course Plan
                    </button>
                  </div>
                  <div class="col-12">
                    <button
                        class="tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"
                        id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button"
                        role="tab" aria-controls="v-pills-messages" aria-selected="false">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                           stroke-linejoin="round" class="text-danger bodyXLarge me-2" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path
                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Project Preview
                    </button>
                  </div>
                  <div class="col-12">
                    <button
                        class="tabs border-0 w-100 bodySmall themeDarkColor lightDeepBG-2 p-3 shadow-sm rounded mb-3 text-start"
                        id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button"
                        role="tab" aria-controls="v-pills-settings" aria-selected="false">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                           class="text-danger bodyXLarge me-2" height="1em" width="1em"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                      </svg>
                      How to enroll
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-8">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
                       tabindex="0">
                    <iframe frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Flutter Core Features | Flutter Tutorial Bangla | Part 01" width="100%" height="100%"
                            src="https://www.youtube.com/embed/h6L2KIh9O1g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Frabbil.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1">
                    </iframe>
                  </div>
                  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    <iframe frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Flutter Core Features | Flutter Tutorial Bangla | Part 01" width="100%" height="100%"
                            src="https://www.youtube.com/embed/h6L2KIh9O1g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Frabbil.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1">
                    </iframe>
                  </div>
                  <div class="tab-pane fade show active" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                    <iframe frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Flutter Core Features | Flutter Tutorial Bangla | Part 01" width="100%" height="100%"
                            src="https://www.youtube.com/embed/h6L2KIh9O1g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Frabbil.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1">
                    </iframe>
                  </div>
                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                    <iframe frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Flutter Core Features | Flutter Tutorial Bangla | Part 01" width="100%" height="100%"
                            src="https://www.youtube.com/embed/h6L2KIh9O1g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Frabbil.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1">
                    </iframe>
                  </div>
                  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                    <iframe frameborder="0" allowfullscreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Flutter Core Features | Flutter Tutorial Bangla | Part 01" width="100%" height="100%"
                            src="https://www.youtube.com/embed/h6L2KIh9O1g?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Frabbil.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="headline-3 bodyLarge-MX-767 themeDarkColor fw-bold pb-2 mt-4 mt-md-3 mb-3 border-bottom"> Flutter App Development</h3>
            <div class="row">
              <div class="col-7 col-md-6 d-flex align-items-center border-end pe-4">
                <div class="flex-shrink-0">
                  <img class="border border-3 border-theme rounded-circle" src="https://rabbil.com/files/rabbil.jpg" alt="image" style="width: 55px; height: 55px;">
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="d-block bodyMedium fs-12-max768 themeColor"> Rabbil Hasan </span>
                  <span class="d-block bodySmall fs-12-max768 "> Senior Software Engineer </span>
                </div>
              </div>
              <div class="col-5 col-md-6 d-flex align-items-center pe-4">
                <div class="flex-grow-1 ms-3">
                  <span class="d-block bodyMedium fs-12-max768 themeColor"> Last Update </span>
                  <span class="d-block bodyMedium fs-12-max768 fw-bold"> 3 Feb 2023  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-3">
            <div class="lightDeepBG-2 rounded shadow-sm p-3"><h2 class="headline-4 themeColor mb-3"><span
                class="bodyXLarge d-inline-block me-2"> 4000 BDT</span></h2>
              <div class="mb-3">
                <div class="d-flex justify-content-between themeDarkColor border-bottom py-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 512 512"
                                                 class="themeColor bodyXLarge me-1 position-relative" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M428.4 27.8v456.4h60.9V27.8h-60.9zM327 168.2v316h60.8v-316H327zM225.4 273.6v210.6h61V273.6h-61zM124 343.8v140.4h60.9V343.8H124zM22.67 394.9v89.3h60.84v-89.3H22.67z"></path></svg> Level </span><span
                    class="d-inline-block">  Beginner to Intermediate  </span></div>
                <div class="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 1024 1024"
                                                 class="themeColor bodyXLarge me-1 position-relative" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z"></path></svg> Lectures </span><span
                    class="d-inline-block"> 200+ Classes </span></div>
                <div class="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 1024 1024"
                                                 class="themeColor bodyXLarge me-1 position-relative" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                    d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg> Duration </span><span
                    class="d-inline-block"> 100 Hours+</span></div>
                <div class="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 24 24" class="themeColor bodyXLarge me-1 position-relative"
                                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg> Language </span><span
                    class="d-inline-block"> Bangla </span></div>
                <div class="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 16 16" class="themeColor bodyXLarge me-1 position-relative"
                                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    fill-rule="evenodd"
                    d="M2 1a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414l-7-7A1 1 0 006.586 1H2zm4 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    clip-rule="evenodd"></path></svg> Type </span><span class="d-inline-block"> MOBILE APP </span></div>
                <div class="d-flex justify-content-between themeDarkColor border-bottom pb-2 mb-2"><span
                    class="d-inline-block"> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 640 512"
                                                 class="themeColor bodyXLarge me-1 position-relative" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg> Learner's </span><span
                    class="d-inline-block"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 1024 1024" class="mb-1" size="16" height="16" width="16"
                                                xmlns="http://www.w3.org/2000/svg"><path
                    d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg> </span>
                </div>
              </div>
              <div class="mb-3">
                <div class="mb-3 bodyLarge fw-bold d-flex justify-content-between">
                  Payment: <img class="img-fluid" src="data:image/png;base64,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" alt="payment-methode"> </div>
              </div>
              <button class="d-block w-100 py-2 themeBtn"> Enroll</button>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <ul class="nav nav-pills mb-3 row g-0" id="pills-tab" role="tablist">
            <li class="nav-item col" role="presentation">
              <button class="nav-link active border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview" aria-selected="true">Home</button>
            </li>
            <li class="nav-item col" role="presentation">
              <button class="nav-link border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG" id="pills-curriculum-tab" data-bs-toggle="pill" data-bs-target="#pills-curriculum" type="button" role="tab" aria-controls="pills-curriculum" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item col" role="presentation">
              <button class="nav-link border w-100 bodySmall themeDarkColor p-1 p-md-2 p-lg-3 rounded-0 mb-3 text-center themeWhiteBG" id="pills-instructor-tab" data-bs-toggle="pill" data-bs-target="#pills-instructor" type="button" role="tab" aria-controls="pills-instructor" aria-selected="false">Contact</button>
            </li>
          </ul>
          <div class="tab-content btn-tab-container" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab"
                 tabindex="0">
              <p><span style="font-size: 14px;"><strong>কোর্স সম্পর্কেঃ&nbsp;</strong> ফ্লাটার মোবাইল এপ ডেপেলপমেন্ট এর এই কোর্সটি সাজানো হয়েছে বিগিনার থেকে মিড লেভেল পর্যন্ত। কোর্সের আলোচনা শুরু হয়েছে Software Engineering এর প্রাথমিক আলোচনা দিয়ে , কেননা আপনি যাই শিখুন, যাই ডেভেলপ করুন । অশ্যই প্রাথমিক বিষয় গুলো সম্পর্কে ধারনা থাকতে হবে, যাতে, আপনার লার্নিং আরও ইফেক্টিভ হয়। এর পর থেকেই হাতে কলমে ফ্লাটার শুরু</span>
              </p>
              <ul>
                <li>ফ্লাটারের আলোচনা শুরু হয়েছে একেবারে Flutter Installation, Tools Installation এবং পরিচিতি পর্ব থেকে।
                  এখানে Flutter প্রোজেক্ট স্ট্রাকচারের ওপরে জোড় দেওয়া হয়েছে, কোন ফাইলের কি কাজ, কোনটা দিয়ে কি হবে, কেনো
                  ইত্যাদি ইত্যাদি ।
                </li>
                <li>এর পর আমরা শিখছি Flutter এর বিভিন্ন Widget একেবারে Appbar,button থেকে শুরু করে Navigation Drawer এবং
                  অন্যান সকল Essential Widget যে গুলো মোবাইল এপ ডেভেলপমেন্টে দরকার।
                </li>
                <li>এই কোর্সে List View এর উপরে বেশি জোড় দেওয়া হয়েছে, কিভাবে Dynamic List View, Gridview বানাবেন, সে
                  গুলোর Event নিয়ে কি ভাবে কাজ করবেন। এছাড়া Flutter Navigation পার্ট উল্লেখ্য যোগ্য
                </li>
                <li>আমরা জানি Flutter দিয়ে শুধু Mobile App নয়, সেই সাথে Web App ও ডেভেলপ করা যায়। আপনি যাতে Web App এর
                  দিকে যেতে পারেন, সে জন্য কোর্সের সাথে যুক্ত আছে Flutter Responsive Design
                </li>
                <li>কোর্সের শুরুতে আমরা সব শিখেছি Stateless Widgets এর মাধ্যমে। এর পর শুরু করেছি Statefull Widget</li>
                <li>Statefull Widget&nbsp; এর শুরুতেই State এর উপরে স্বচ্ছ ধারনা তৈরির জন্য বেশ কিছু আলোচনা হয়েছে । এর
                  পর হাতে কলমে আমরা শিখেছি Statefull Widget এর খুটি-নাটি
                </li>
                <li>Statefull Widget শেখার ক্ষেত্রে Application Lifecycle এর উপরে বেশ খানিকটা জোড় দেওয়া হয়েছে।</li>
                <li>এই কোর্সের আরেকটু গুরুত্ব পুর্ন পার্ট GetX , আমরা শিখেছি কিভাবে Statefull Widget ছাড়াও GetX&nbsp;
                  দিয়ে State Manage করা যায় এবং Getx এর অন্যান Component গুলোর সুবিধা নেওয়া যায় ।
                </li>
                <li>এবার আসি Rest API Calling এর বিষয়ে। Rest API Calling নিয়ে শুরুতেই বেশ কিছু খুটি নাটি বিষয় নিয়ে
                  আলোচনা হয়েছে। এর পর শিখেছি, কিভাবে Rest API দিয়ে Get,Post করতে হয়, কিভাবে Authentication Token ম্যানেজ
                  করতে হবে। এছাড়াও Rest API এ কাজ করতে গেলে কিভাবে আপনি POSTMAN ব্যাবহার করে সুবিধা নিবেন, সেখানে বিশেষ
                  গুরুত্ব দেওয়া হয়েছে।
                </li>
              </ul>
              <p><strong>ছোট প্রজেক্ট সমূহঃ </strong></p>
              <ul>
                <li>Stateful Widget ব্যাবহার করে Counter App</li>
                <li>Stateful Widget ব্যাবহার করে Simple যোগ-বিয়োগ App</li>
                <li>Stateful Widget করে To Do App</li>
                <li>Rest API ব্যাবহার করে CRUD App</li>
              </ul>
              <p><strong>মেইন প্রোজেক্টঃ এই কোর্সের ফোকাস প্রোজেক্ট হচ্ছে Task manager app, যে প্রজেক্টের মাধ্যমে আমরা
                অনেক গুলো বিষয় শিখেছি, </strong>Overall এই কোর্সের মেইন ফোকাস প্রোজেক্ট <strong>Task manager app টি
                হচ্ছে আপনার Flutter Developer হয়ে ওটার একটি বেঞ্চমার্ক। </strong><strong>চলেন জেনে আসি এই প্রজেক্ট করতে
                গিয়ে কি কি শিখলাম </strong></p>
              <ul>
                <li>Postman দিয়ে Rest API এর Documentation বোঝা ।</li>
                <li>Rest API কে Simulate করা ।</li>
                <li>কিভাবে App এ Login, Registration, PIN Code Verification, Forget Password, Password Reset করা&nbsp;
                  ।
                </li>
                <li>JWT Auth টোকেন ম্যানেজ করা ।</li>
                <li>নতুন Task Create করা, যে গুলোর Status Change করা, Delete করা ।</li>
                <li>আলাদা আলদা Fragment Screen করে Task List দেখানো।</li>
                <li>Swipe to refresh করে, Rest API Call করা ডাটা রিফ্রেশ করা ।</li>
                <li>Rest API Call করে Error manage করা।</li>
                <li>User এর Session ম্যানেজ করা, তাকে Logout করে দেওয়া, User Profile ম্যানেজ করা ।</li>
                <li>Shared Preference ব্যাবহার করে Local Data নিয়ে কাজ করা।</li>
                <li>কিভাবে Resuable কোড লিখবেন, সে গুলো ম্যানেজ করবেন ।</li>
                <li>এছাড়াও শেখার জন্য টুকি টাকি অনেক বিষয় আছে এই প্রোজেক্টে</li>
              </ul>
              <p><strong>কোর্স ভিডিও এবং সোর্স কোডঃ </strong></p>
              <ul>
                <li>কোর্সের সব গুলি ভিডিও একসাথে ধারাবাহিক ভাবে দেওয়া আছে। Video Quality:&nbsp; 1920*1080 , Sound
                  Quality: Studio Recorded
                </li>
                <li>সকল প্রাকটিস সোর্স কোড এবং রিসোর্সে ড্যাসবোর্ডে দেওয়া আছে।</li>
              </ul>
              <p><strong>আগে থেকে যা জানতে হবে: </strong></p>
              <ul>
                <li>যে কোন একটি Object Oriented Programming Language জানতে হবে।</li>
                <li>আপনি যদি Dart জানেন, তাহলে খুবি ভালো।</li>
                <li>Dart এর ফ্রি ক্লাস ভিডিও আমার ইউটিউব চ্যানেলে দেওয়া আছে-<a
                    href="https://www.youtube.com/watch?v=vYfUFWrkgJk&amp;list=PLkyGuIcLcmx1mIPyMdVodlSVJqL7Y9Wv7&amp;index=19">
                  এ লিংকে ক্লিক করুন</a></li>
              </ul>
              <p><strong>একসেসঃ </strong></p>
              <ul>
                <li>সকল রিসোর্স ভিডিওতে সারাজীবন আপনার একসেস থাকবে।</li>
                <li>কোর্সের ভিডীও আপডেট হলে, কিংবা নতুন আরও টপিক যুক্ত্র হলে আপনি সে গুলো পেতে থাকবেন।</li>
              </ul>
              <p><strong>সাপোর্ট লাইভ ক্লাস </strong></p>
              <ul>
                <li>কোর্সের ভিডিও গুলো যথেষ্ট Informative এবং ধারাবাহিক, আপনি মনোযোগ সহকারে ক্লাস গুলো দেখুন, বোঝার
                  চেষ্টা করুন।
                </li>
                <li>আমি "রাব্বিল হাসান" আমার যা বক্তব্য সব ভিডিওতে দিয়ে দিয়েছি। আমার লাইভ ক্লাসের কোনও প্রয়োজন নেই।</li>
                <li>এই কোর্সের ক্ষেত্রে কোনও One to one support নেই। আপনি যদি কোর্সের পুর্ব শর্ত OOP language জানেন এবং
                  একটু পরিশ্রমী হওয়ার চেষ্টা করেন, সত্যি আপনার One to one support এর কোনও দরকার হবে না।
                </li>
                <li>এর পরেও কোনও কিছু বুঝতে সমস্যা হলে Google সার্চ করুন, Stack overflow তে সার্চ করুন। one to one
                  support নির্ভরশীলতার থেকে এটা আপনার জন্যে আরও বেশি ইফেক্টিভ হবে।
                </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="pills-curriculum" role="tabpanel" aria-labelledby="pills-curriculum-tab"
                 tabindex="0">
              <p>
                <strong>Foundation Software Engineering</strong>
              </p>
              <ul>
                <li>What is software engineering</li>
                <li>Importance of software engineering</li>
                <li>Requirement engineering</li>
                <li>Software Development Lifecycle</li>
                <li>Water fall Model</li>
                <li>Agile Model</li>
                <li>Rad Model</li>
                <li>Incremental Model</li>
                <li>Big Bang Model</li>
                <li>Project Managment</li>
                <li>Project Manager</li>
                <li>Project Planing</li>
                <li>Risk managment</li>
                <li>Project scheduling</li>
                <li>Entity–relationship model</li>
                <li>Software Design Stages</li>
                <li>Software Coding</li>
                <li>Software Quality Assurance</li>
                <li>Software maintenance</li>
              </ul>
              <p><strong>Flutter Beginning : </strong></p>
              <ul>
                <li>Flutter Core Features</li>
                <li>Installation</li>
                <li>Create New Project &amp; Run</li>
                <li>Project File Folder structure</li>
                <li>Activity &amp; widgets concepts</li>
                <li>Understanding Source Code Flow</li>
                <li>MaterialApp Class</li>
                <li>Scafold Class In Flutter</li>
                <li>Flutter Appbar</li>
                <li>Flutter Floating Button</li>
                <li>Bottom Tab Nav</li>
                <li>Navigation Drawer</li>
                <li>End Drawer</li>
                <li>Body</li>
                <li>Body Container</li>
                <li>Row &amp; Container</li>
                <li>Button</li>
                <li>Alert Dialog</li>
                <li>Simple Form</li>
                <li>Dynamic List View Builder</li>
                <li>Tab Bar Tab View Fragment</li>
                <li>Simple Navigation</li>
                <li>Pass Data Via Navigation</li>
                <li>Working with card</li>
                <li>Circle progress</li>
                <li>Linear Progress</li>
                <li>Flutter Icon Class</li>
              </ul>
              <p><strong>Flutter Responsive Design</strong></p>
              <ul>
                <li>Intorduction to responsive and adaptive</li>
                <li>Aspect Ratio</li>
                <li>Fractionaly Sized Box</li>
                <li>Layout Builder</li>
                <li>Single Child Scroll View</li>
                <li>Expanded</li>
                <li>Flexiable</li>
                <li>Media Query</li>
                <li>Responsive Grid Implementation</li>
                <li>Flutter Bootstrap</li>
              </ul>
              <p><strong>Flutter Stateful Widget Concept: </strong></p>
              <ul>
                <li>State Concept</li>
                <li>Stateless VS Stateful</li>
                <li>How Stateful Widget Works</li>
                <li>State Lifecycle</li>
                <li>How State Lifecycle works</li>
              </ul>
              <p><strong>Flutter Stateful Counter App</strong></p>
              <ul>
                <li>Part 01, Part 02</li>
              </ul>
              <p><strong>Flutter Stateful Sum App</strong></p>
              <ul>
                <li>Part 01,Part 02,Part 03, Part 04, Part 05</li>
              </ul>
              <p><strong>Flutter Stateful Todo App</strong></p>
              <ul>
                <li>Part 01,Part 02,Part 03, Part 04, Part 05</li>
              </ul>
              <p><strong>Rest API Basic Understading </strong></p>
              <ul>
                <li>Part 01,Part 02,Part 03, Part 04, Part 05, Part 06,Part 07,Part 08,Part 09,Part 10</li>
              </ul>
              <p><strong>CRUD APP Using Rest API </strong></p>
              <ul>
                <li>Part 01 থেকে Part 23</li>
              </ul>
              <p><strong>Task manager project: </strong></p>
              <ul>
                <li>Project Introduction</li>
                <li>Understand Project Features</li>
                <li>Understand REST API</li>
                <li>Project Initilization</li>
                <li>Arrange Fonts &amp; UI Resources</li>
                <li>Arrange Dart Files</li>
                <li>Arrange Route Navigations</li>
                <li>Arrange Common Style</li>
                <li>Splash Screen Design</li>
                <li>Design Login,Registration,Set Password,Set Email Screen</li>
                <li>Design PIN Input Screen</li>
                <li>Intial API Call Methods For Onboarding</li>
                <li>Manage Login Request</li>
                <li>Manage Login Redirect</li>
                <li>Working With Shared Preference Login Data</li>
                <li>Login Redirect From Main</li>
                <li>Go to Forget Pass Signup page</li>
                <li>Complete Registration</li>
                <li>Password Reset</li>
                <li>Password Reset Email Verify</li>
                <li>Pin Verification</li>
                <li>Reset Password</li>
                <li>Create Common Home Screen</li>
                <li>Bottom Tab</li>
                <li>Bottom Tab</li>
                <li>Dynamic Body</li>
                <li>API Request for task list</li>
                <li>Call task api</li>
                <li>Set Progress Indicator</li>
                <li>Refresh Indicator</li>
                <li>Reusable List View</li>
                <li>Working With App Bar</li>
                <li>Manage Logout</li>
                <li>Read Shared Pref Data For App Bar</li>
                <li>Create New Task</li>
                <li>Show Task Status</li>
                <li>Delete Task Item</li>
                <li>Update Task Item Status</li>
              </ul>
              <p><strong>Flutter Getx : </strong></p>
              <ul>
                <li>Getx Introduction</li>
                <li>Getx Installation</li>
                <li>Getx Snack Bar</li>
                <li>Getx Dialog</li>
                <li>Getx Bottom Sheet</li>
                <li>Getx Routing</li>
                <li>Getx Named Routing</li>
                <li>Getx Named Routing</li>
                <li>Getx Storage</li>
                <li>Getx State Managment</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="pills-instructor" role="tabpanel" aria-labelledby="pills-instructor-tab"
                 tabindex="0">
              <p>Rabbil Hasan is our core instructor. He is working on web &amp; mobile application development for more
                than 8 years. He started his programming instructor career at Bangladesh ICT Ministry in a software
                development program. After that, he plays a great role as a software development instructor at CBA-IT,
                STEPUP-IT, TexLab, and Northbengal IT. Presently he is working at IDLC Finance Ltd as a senior software
                engineer. Working with country-leading fintech solutions.</p>
              <p><strong>Ongoing Research :</strong></p>
              <ol>
                <li>Web Application Securtiy</li>
                <li>Facial Anti-Spoofing Detection</li>
              </ol>
              <p><br><strong>Completed R&amp;D Past Years:</strong></p>
              <ol>
                <li>Best practices for Restful API &amp; mobile application development.</li>
                <li>Best practices for single page web application development.</li>
                <li>Cross platform install-able PWA development.</li>
                <li>Bio-metric face analysis &amp; recognition using TensorFlow</li>
                <li>Optical character recognition using Tesseract engine</li>
                <li>Web application optimization to reduce server load.</li>
                <li>High performance &amp; reusable JavaScript component development.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComponents"
}
</script>

<style scoped>
.tabs-container .tabs {
  cursor: pointer;
}

.tabs-container .tabs.active {
  color: white;
  background: var(--themeColor);
}

.tabs-container .tabs.active svg {
  color: white !important;
}

.tab-pane {
  padding: 10px;
}

.tabs-container .tab-pane.active {
  display: block;
  border-radius: 10px;
  border: 5px solid var(--themeColor) !important;
}

.tabs-container iframe {
  min-height: 340px;
}

.btn-tab-container .tab-pane.active {
  display: inline-block;
  border-radius: 0;
  border: 0 solid transparent !important;
}

.btn-tab-container .nav-item {
  width: 100% !important;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: white;
  background: var(--themeColor);
}

.tabs-container .content {
  display: none;
  padding: 10px;
}

.tabs-container .active-content {
  display: block;
  border: 5px solid var(--themeColor);
}

.tabs-container .slick-dots li {
  background-color: white;
}

.tabs-container .slick-dots li button:before {
  font-size: 10px;
  top: -2px;
}

.tabs-container .slick-dots li.slick-active button:before {
  opacity: 1;
  color: var(--themeColor);
}

/* Modal */
.tabs-container .modal-body {
  min-height: 340px;
}

/* Accordion */
.tabs-container .accordion-button {
  color: var(--themeDarkColor);
}

.tabs-container .accordion-button:not(.collapsed) {
  color: var(--themeWhiteColor);
  background-color: var(--themeColor);
}
</style>