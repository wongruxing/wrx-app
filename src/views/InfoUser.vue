<template>
    <div>
        <UserTop />
        <UserFooter />
    </div>
</template>
<script>

// @ is an alias to /src
// import { getMusicItemList, getItemList } from "@/request/api/item.js";
import UserFooter from "@/components/user/UserFooter.vue";
import UserTop from "@/components/user/UserTop.vue";
// async mounted(){
//     let res2= await getItemList(5221080943);
//     console.log(res2);
// },
export default {
    components: {
        UserTop,
        UserFooter,

    },
};
</script>