<template>
  <div class="footer">
            <div class="container">
                <p class="footer-text">Copyright © 2019 MusicIsLife All Rights Reserved.</p>
                <ul class="footer-menu">
                    <li><a href="#"><i class="fas fa-globe-americas"></i></a></li>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.footer * {
    /* border: 0.5px solid #fff; */
    align-items: center;
    padding: auto;
}
.footer{
    background-color: #333;
    height: 100px;
    margin-top: 20px;
    display: flex;
}
.container{
    margin: auto 20%;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
   /* 因為通常 footer 也跟 navbar 一樣會是固定的尺寸，所以這邊可以大膽的設定高度，為了區隔上方的內容，所以用了 margin-top */
.footer-text{
    height: 100%;
    /* width: 100%; */
    font-size: 16px;
    color: #ffc078;

/* //針對 footer-text 的文字做設定，讓它 footer 的左邊 */
}
.footer-menu{
    height: 100%;
    /* width: 100%; */
    /* //讓 footer 裡面的連結圖示靠右對齊 */
}
.footer-menu  li{
      float: left;
      margin-right: 1em;
      /* //這邊的 li 的技巧跟上面選單的技巧一樣，就不再贅述 */
}
.footer-menu  a{
        font-size: 16px;
        color: #ffc078;
        cursor: pointer;
              }
     /* //設定 a 連結的內容 */
</style>