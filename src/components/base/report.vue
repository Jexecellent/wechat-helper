<template>
	<div>
		<my-groups @on-change-group="groupClick($event)"></my-groups>
	</div>
</template>
<script>
	import MyGroups from '../group'
	export default {
		components:{
			MyGroups
		},
	}
</script>