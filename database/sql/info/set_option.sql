select SECTION,
       CODE   ,
       NAME
  from COMMON
 WHERE MAINMENU = ?
   AND SUBMENU  = ?