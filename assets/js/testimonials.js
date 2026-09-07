---
---
// Data lives in _data/testimonials.json (the single source of truth) and is
// templated into this file at build time via Jekyll's Liquid front matter -
// any .js file with front matter gets processed like any other Jekyll
// template. Edit the JSON, not this array.
const testimonials = {{ site.data.testimonials | jsonify }};

function shuffleArray(array) {
  const arrayCopy = array.slice(0);
  for (var i = arrayCopy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[j];
      arrayCopy[j] = temp;
  }
  return arrayCopy;
}

window.onload = function () {
  // random_pool: false opts a testimonial out of every untopic'd/random
  // draw (the About page's 3 unfiltered cards, or a topic query that finds
  // no match and falls back to random) without affecting whether a
  // topic-scoped card can still find it - that's what testimonialsCopy is
  // for below. Keeping two separate shuffled arrays (rather than one
  // shared, spliced array) means a page that mixes a topic-scoped call
  // with an untopic'd one could in theory show the same person twice;
  // no current page does both, and that's a minor cosmetic risk, not a
  // broken card, so not worth the complexity of unifying them.
  const visibleTestimonials = testimonials.filter((item) => item.display !== false);
  const randomPoolTestimonials = visibleTestimonials.filter((item) => item.random_pool !== false);
  const testimonialsCopy = shuffleArray(visibleTestimonials);
  const randomPoolCopy = shuffleArray(randomPoolTestimonials);
  const testimonialElements = document.querySelectorAll('[testimonial]');
  testimonialElements.forEach((element) => {
    try {
      const rawValue = element.getAttribute("testimonial");
      if (rawValue) {
          const [key, value] = rawValue.split(":");
          const testiminialIndex = testimonialsCopy.findIndex((item) => {
              return String(item[key]).toLowerCase().includes(value.toLowerCase());
          })
          if (testiminialIndex > -1) {
              const testiminial = removeIndexFromArray(testimonialsCopy, testiminialIndex);
              initiateCard(testiminial, element);
              return;
          }
          console.warn(value + " was not found in " + key + ". Falling back to random!");
      }
      initiateCard(getRandomItem(randomPoolCopy), element);
    } catch (error) {
      // A malformed card shouldn't stop the rest of the cards on the page
      // from being populated (forEach doesn't stop on a thrown error from
      // one iteration, but a rethrow would still be lost silently, so we
      // catch and log here instead).
      console.error("Failed to initialize a testimonial card:", error, element);
    }
  });
}

function initiateCard(item, element) {
  const quoteEl = element.querySelector('.quote');
  if (quoteEl) quoteEl.innerText = item.quote;

  const nameEl = element.querySelector('.name');
  if (nameEl) nameEl.innerText = item.name;

  const titleEl = element.querySelector('.title');
  if (titleEl) titleEl.innerText = item.title;

  const companyEl = element.querySelector('.company');
  if (companyEl) companyEl.innerText = item.company;

  const webpImageEl = element.querySelector('.webpimage');
  if (webpImageEl) webpImageEl.srcset = "/assets/images/testimonial-images/" + item.webpimage;

  const jpgImageEl = element.querySelector('.image');
  if (jpgImageEl) jpgImageEl.srcset = "/assets/images/testimonial-images/" + item.image;

  const imgEl = element.querySelector('img');
  if (imgEl) {
    imgEl.src = "/assets/images/testimonial-images/" + item.image;
    imgEl.alt = "Testimonial image of " + item.name;
  }

  if (item.linkedin) element.href = item.linkedin;
}

function removeIndexFromArray(items, index) {
  const [item] = items.splice(index, 1);
  return item;
}

function getRandomItem(items) {
  const randomIndex = getRandomNumber(items.length);
  return removeIndexFromArray(items, randomIndex);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomInt(max) {
return Math.floor(Math.random() * max) * (Math.round(Math.random()) ? 1 : -1) + "deg";
}

console.log(getRandomInt(4));
// expected output: 0, 1 or 2

document.documentElement.style.setProperty('--random-deg', getRandomInt(3));
