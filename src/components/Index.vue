<template>
  <div>
      <topMenu></topMenu>
      <HomePage></HomePage>
      <aboutMe></aboutMe>
      <mySkill></mySkill>
      <Pass></Pass>
      <Footer></Footer>
  </div>
</template>

<script>
import HomePage from './homepage'
import topMenu from './TopMenu'
import mySkill from './skill'
import Footer from './footer'
import aboutMe from './aboutme'
import Pass from './myexperience'

export default {
  name:'Index',
  components: { 
    topMenu,
    HomePage,
    mySkill,
    aboutMe,
    Pass,
    Footer,
  }
}
</script>
