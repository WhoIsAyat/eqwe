<template>
    <div class="container">
        <div class="Footer">
            <div class="right-side">
                <h2 class="h2-social">Contact With Me:</h2>
            <ul class="contact">
                <li class="footer-contact"><a href="https://t.me/Immortalrio27" class="social-media" target="_blank"><img src="../assets/image/footer/icons/telegram.svg" alt="" class="social-img"> <span  class="span-social-media">Telegram</span></a></li>
                <li class="footer-contact"><a href="https://facebook.com/ImmortalRio27" class="social-media" target="_blank"><img src="../assets/image/footer/icons/facebook.svg" alt="" class="social-img"> <span class="span-social-media">Facebook</span></a></li>
                <li class="footer-contact"><a href="https://www.instagram.com/idontwanttosleep_/" class="social-media" target="_blank"><img src="../assets/image/footer/icons/instagram.svg" alt="" class="social-img">  <span class="span-social-media">Instagram</span></a></li>
                <li class="footer-contact"><a href="mailto:alievaat533@gmail.com" class="social-media" target="_blank"><img src="../assets/image/footer/icons/email.svg" alt="" class="social-img">      <span class="span-social-media">Gmail</span></a></li>
            </ul></div>
            <div class="copyright">
                <p class="copy"> All rights reserved </p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
    max-width: 100vw;
    margin: 0 auto;
}
.Footer{
    padding-top: 20px;
    animation-name: visibility;
    animation-duration: 3s;
    background: rgba(117, 114, 114, 0.5);
}
.h2-social{
    text-align: center;}

.footer-contact{
        transition: .5s;
        padding: 4px;
}
.footer-contact:hover{
    transition: .5s;
   padding: 10px;
    border: 2px solid black;
   
    border-radius: 15px;
    span{
        color: black;
    }

}
.social-img{
    max-width: 50px;

}
.contact{
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 gap: 20px;
 border-bottom: 3px solid white;
 padding: 20px 20px;
}
.social-media{
    display: flex;
    align-items: center;
    gap: 10px;
}
.copyright{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.copy{
    position: relative;
    padding-left: 25px;
}
.copy::before{
    content: '\00A9';
    position: absolute;
    top: 0;
    left: 0px;
    width: 3px;
}
.span-social-media{
    color: white;
}
@keyframes visibility {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@media (max-width: 700px) {
    .span-social-media{
        display: none;
    }
}

</style>