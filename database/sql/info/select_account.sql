SELECT (  SELECT NAME
            FROM COMMON
           WHERE MAINMENU = ?
             AND SUBMENU  = ?
             AND CODE     = A.SYSTEM )  AS SYSTEM ,
       (  SELECT NAME
            FROM COMMON
           WHERE MAINMENU = ?
             AND SUBMENU  = ?
             AND CODE     = A.PURPOSE)  AS PURPOSE,
       A.ACCUNT                         AS ACCUNT ,
       A.IP                             AS IP     ,
       CASE B.DEV WHEN 0 THEN 'DEV'
                  WHEN 1 THEN 'OP' END  AS DEV    ,
       B.MANAGER                        AS MANAGER,
       B.YMD                            AS YMD    
  FROM ACC_MASTER A,
       ACC_DETAIL B
 WHERE A.SYSTEM  LIKE CONCAT(?, "%")
   AND A.PURPOSE LIKE CONCAT(?, "%")
   AND A.SYSTEM   = B.SYSTEM
   AND A.ACCUNT   = B.ACCUNT
   AND A.PURPOSE  = B.PURPOSE
   AND A.UPDSEQ   = B.UPDSEQ