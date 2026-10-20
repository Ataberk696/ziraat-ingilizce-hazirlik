@echo off
title Ziraat Bankasi Uzman Yardimciligi Ingilizce Hazirlik
echo ================================================================
echo   ZIRAAT BANKASI UZMAN YARDIMCILIGI (BILISIM) INGILIZCE HAZIRLIK
echo ================================================================
echo.
echo Yerel hazirlik platformu baslatiliyor...
echo.

:: Tarayicida dogrudan baslat
start "" "http://localhost:3000"

:: Node sunucusunu calistir
node server.js

pause
