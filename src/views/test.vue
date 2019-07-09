<template>
	<div class="test">
	    <li v-for="site in sites">
	      {{ site.name }}
	    </li>
	    
	    <div class="page-navbar">
		    <div class="page-title">Navbar</div>
		    <!-- navbar -->
			    <mt-navbar class="page-part" v-model="selected">
			      <mt-tab-item id="1">选项一</mt-tab-item>
			      <mt-tab-item id="2">选项二</mt-tab-item>

			    </mt-navbar>
		 
		    <div>
		      	<mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
		    </div>
		 
			<!-- tabcontainer -->
		    <mt-tab-container v-model="selected">
		      <mt-tab-container-item id="1">
		        <div id="jibenziliao">
		        	<div class="baomingbiao_jbxx_liebiao">
			  			<span class="baomingbiao_jbxx_label">姓名</span>
			  			<span class="baomingbiao_jbxx_xm_value">张三丰</span>
	  				</div>
		        </div>
		      </mt-tab-container-item>
		      <mt-tab-container-item id="2">
		        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
		      </mt-tab-container-item>

		    </mt-tab-container>
	  	</div>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				sites:[
					{name:'木木哥'},
					{name:'很帅'},
					{name:'真的很帅'}
				],
				selected: '1'
			}			
		}
	}	
</script>

<style>
	.test{
		font-size: 50px;
		color: #E51C23;
		text-align: center;
		margin: 50px;
	}
</style>