<template>
<div>
    <mytitle></mytitle>
    <router-view></router-view>
</div>
</template>

<script>
import mytitle from '@/components/mytitle'
export default {
    name:"index",
    components: {
        mytitle
    }
}
</script>
<style>
</style>