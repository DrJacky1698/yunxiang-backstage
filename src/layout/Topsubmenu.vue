<template>
  
  <div>

    <el-menu class="submenu" mode="horizontal" router>
        <el-menu-item v-for="(value,key) in location" :key="key" :index="value">{{key}}</el-menu-item>
    </el-menu>

  </div>

</template>

<script>
import {submenudata} from '@/menudata/submenudata.js'
import {routes} from '@/router'
export default {
  data(){
    return{
      submenudata:submenudata,
      routes:routes[2].children
    }
  },

  computed:{
    //循环判断当前页归属于哪个一级菜单，随后将所属的一级菜单下的所有二级菜单罗列出来，供加载顶部导航
    location:function(){

      //创建输出用的i空值
      let i = {}
    
      //循环一级菜单
      Object.keys(this.submenudata).forEach(element1 => {

        //循环二级菜单
        Object.keys(this.submenudata[element1]).forEach(element2 =>{

          //如果element2（某个二级菜单的key）等于当前页面的$route.name（名字）
          if (element2 === this.$route.name){

            //那么就把这个二级菜单所属的一级菜单底下所有二级菜单循环一遍（key循环），element3为二级菜单的名字
            Object.keys(this.submenudata[element1]).forEach(element3 =>{
              
              //每个element3（某个二级菜单的名字）都从routes里面循环找到这个element3（某个二级菜单的名字）所对应的path，
              //最后用key（二级菜单的value，也就是中文的二级菜单）和value（路径path）做匹配后加入i中作为结果输出
              this.routes.forEach(element4 => {

                //如果element4（routes中某一项）的名字等于element3（某个二级菜单的名字）
                if (element4.name === element3){

                  //那么[element1]（菜单底下此时循环到的一级菜单）[element3]（此时循环到的一级菜单下的二级菜单）所对应的value（也就是二级菜单的中文名）
                  //与 element4（routes中某一项）的path作为key&value匹配，并加入i
                  i[this.submenudata[element1][element3]] = element4.path

                }
              })

            })

          }

        })

      })

      console.log(i);
      return i
    }
  },

  methods:{
    print(){
      console.log(this.submenudata);
    }
  },

  created(){
    this.print()
  }
}
</script>

