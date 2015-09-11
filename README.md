#udom

# Api


# Element

* require('udom/isVisible')(dom element)
  return whether or not the targeted element is visible (as in , can be clicked upon)


## test

* require('udom/test/waitFor')(element, chain)
Wait for an element to exist, then continue chain

* require('udom/test/waitUntilVisible')(element, chain)
Wait for an element to exist and be visible (c.f. isVisible), then continue chain


