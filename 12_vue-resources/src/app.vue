<template>
    <div>
        <footer-vue></footer-vue>
        {{newsListShow}}
        <!-- <ul>
            <li v-for="(item, key) in newsListShow">{{item.author_name}}</li>
        </ul> -->
    </div>
</template>
<script>
export default {
    data() {
            return {
                newsListShow: [],
            }
        },
        created() {
            // this.$http.get('/news/index').then(res => {
            //         console.log(res);
            //         this.newsListShow = res.body.articles;
            //         console.log(this.newsListShow);
            //     }, err => {
            //         console.log(err);
            //     })
            this.$http.post('/news/message', {
                content: 'sss'
            }).then(res => {
                console.log(res)
                    // this.data = res.body.message
            }, err => {
                console.log(err)
            })
        },
}
</script>
<style>
</style>
