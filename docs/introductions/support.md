# Support & Bug Reports ​

**If you need access to the private repository, please contact me.**

📧 Email: maingocthanhtan96@gmail.com

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/84553090?v=4',
    name: 'Mai Ngoc Thanh Tan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/maingocthanhtan96' },
      { icon: 'facebook', link: 'https://www.facebook.com/groups/larajs' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members />
