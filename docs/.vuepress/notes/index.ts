import { defineNotesConfig } from 'vuepress-theme-plume'

import sinopec07 from './sinopec07'
import sinopec19 from './sinopec19'
import sinopec09 from './sinopec09'
import sinopec21 from './sinopec21'
import sinopecqa from './sinopecqa'
import note from './note'



export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '/notes/',
  link: '/',
  
  
  // 在这里添加 note 配置
  notes: [ 
    sinopec07,
    sinopec19,
    sinopec21,
    sinopecqa,
    note,
    sinopec09
  ]
})