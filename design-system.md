---
layout: design-system
permalink: /design-system/
title: Design System
hello: Design<br/>System
subtitle: Components used to make this website
web_cover_img: /assets/work/web-noisytenants.png
---
{% include components/project_meta.html %}
{% include components/spacer.html height="40" %}
## Slider
<div class="primary_slider"><!-- only on tablet -->
	<div class="slide slide_img"><img src="{{ page.slide1 }}" /></div>
	<div class="slide slide_img"><img src="/assets/slide1.jpg" /></div>
	<div class="slide slide_img"><img src="/assets/slide2.jpg" /></div>
	<div class="slide slide_img"><img src="/assets/slide4.jpg" /></div>
	<div class="slide slide_img"><img src="/assets/slide5.jpg" /></div>
</div>

only works on tablet view 768 - 992px

---

## Credits
{% include components/credits.html creditList="credits-the-war-is-over" %}

---

## Project Meta Information
{% include components/project_meta.html %}

---


## Visual Image

{% include components/visual_img.html visual-no="07" visual-img="/assets/visuals/the-war-is-over-3.jpg" %}


---

## Web Cover Image

{% include components/web_cover_img.html %}