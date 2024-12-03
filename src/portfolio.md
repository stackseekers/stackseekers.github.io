---
home: true
portfolio: true
title: Profiles
icon: user
name: Your Go-To Full-Stack Developer for
avatar: https://heartstchr.github.io/img/jiwan.png

titles:
  - Scalable Solutions
  - Efficient Solutions
  - Innovative Solutions
---

<div class="mt-8">
  <div class="my-4 text-md"> I’m a passionate full-stack developer with 11 years of experience creating dynamic web and mobile applications. Whether it’s crafting seamless user experiences, building robust backend systems, or optimizing existing applications, I pride myself on delivering quality work tailored to each client’s unique needs.</div>
</div>

<div class="pt-8 surface-100 border-round-md text-900">
  <div class="text-center">
    <div class="text-4xl font-bold">My Mission</div>
    <div class="my-4 text-md">My goal is to empower businesses and individuals through technology. I believe in building solutions that are not just functional but also user-friendly, accessible, and future-proof. Every project I take on is a partnership where your success is my priority.</div>
  </div>
</div>

<div class="pt-8 surface-100 border-round-md text-900">
  <div class="text-center">
    <div class="text-4xl font-bold">A Little More About Me</div>
    <div class="my-4 text-md">When I’m not coding, I enjoy creating tech tutorials for my YouTube channel Stack Seekers, exploring the latest in mobile technology, and traveling to discover new cultures and ideas.</div>
  </div>
</div>

<div class="pt-8 surface-100 border-round-md text-900">
  <div class="text-center">
    <div class="my-4 text-md">Let’s Collaborate!</div>
  </div>
  <div class="my-4 text-center text-md">Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
  </div>
  <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
    <Button label="Contact Me" icon="pi pi-envelope" severity="info" />
  </a>
  <div class="flex flex-row justify-content-end flex-wrap gap-4 p-3 mx-6">
    <a
      v-for="(socialElement, socialIndex) in social"
      :key="socialIndex"
      :href="socialElement.url"
      target="_blank"
      class="flex flex-row text-600 gap-2"
      >
      <i :class="socialElement.icon" style="font-size: 1rem"></i>
      </a>
  </div>
</div>


<script setup lang="ts">
  const social= [
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Facebook', icon: 'pi pi-facebook', url: 'https://www.facebook.com/profile.php?id=61568807672853' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
  ]
</script>