import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import VueInfoAddon from 'storybook-addon-vue-info'

import {
  withKnobs
} from '@storybook/addon-knobs/vue'

import RplHeroBanner from './HeroBanner.vue'
import RplIntroBanner from './IntroBanner.vue'
import readme from './README.md'
import { demoData } from '../../../src/storybook-components/_data/demoData.js'

storiesOf('Organisms/HeroBanner', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Hero Banner', withReadme(readme, () => ({
    components: { RplHeroBanner },
    template: `<rpl-hero-banner
  :title="title" :introText="introText"
  :linkHeading="linkHeading" :links="links"
  :moreLink="moreLink"
  :theme="theme"
  :showLinks="showLinks"
  :logo="logo"
  :backgroundGraphic="backgroundGraphic"
  class="rpl-site-constrain--on-all"
/>`,
    data () {
      return demoData.heroBanner()
    }
  })))
  .add('Intro Banner', withReadme(readme, () => ({
    components: { RplIntroBanner },
    template: `<rpl-intro-banner
  :title="title" :introText="introText"
  :linkHeading="linkHeading" :links="links"
  :showLinks="showLinks"
  class="rpl-site-constrain--on-all"
/>`,
    data () {
      return demoData.introBanner()
    }
  })))
