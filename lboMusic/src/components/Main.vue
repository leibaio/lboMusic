<template>
  <div id="main-box">
     <n-space vertical>
      <n-space> <n-switch v-model:value="inverted" />inverted</n-space>
      <n-layout
        has-sider
        class="main-layout"
      >
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="200"
          show-trigger
          :inverted="inverted"
         
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
          
        </n-layout-sider>
        <n-layout>
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
 
</template>

<script>
import { h, defineComponent, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from 'vue-router'
import {
  PlanetOutline as PlanetIcon,
  DiscOutline as DiskIcon,
  GlassesOutline as GlassIcon,
  GlassesSharp as GlassSharpIcon,
  DownloadSharp as DownloadIcon,
  Recording as LaughIcon
} from "@vicons/ionicons5";


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'content',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '每日推荐' }
      ),
    key: "daily-recommend",
    icon: renderIcon(DiskIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'search',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '歌曲搜索' }
      ),
    key: "songs-search",
    icon: renderIcon(PlanetIcon),
  },
  {
    label: "我的音乐",
    key: "my-music",
    icon: renderIcon(GlassIcon),
    children: [
      {
        label: "本地与下载",
        key: "download",
        icon: renderIcon(DownloadIcon)
      },
      {
        label: "坠吼的",
        key: "best",
        icon: renderIcon(GlassSharpIcon),
      },
      {
        label: "谈笑风生",
        key: "the-past-increases-the-future-recedes",
        icon: renderIcon(LaughIcon)
      }
    ]
  }
];

export default defineComponent({
  setup() {
    return {
      inverted: ref(false),
      menuOptions,
      
    };
  }
});
</script>