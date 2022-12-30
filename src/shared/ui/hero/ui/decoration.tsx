import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const Decoration = () => {
  const theme = useTheme()
  return (
    <Container>
      <svg
        style={{ top: 0 }}
        width="1723"
        height="641"
        viewBox="0 0 1723 641"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.secondary} strokeWidth="1">
          <animate
            attributeName="d"
            dur="13000ms"
            repeatCount="indefinite"
            values="M1 94.1641C58.1815 94.1641 90.6813 87.0449 147.422 94.1641C232.786 104.874 275.038 136.091 357.096 162.052C385.763 171.121 430.556 185.103 430.556 185.103C430.556 185.103 474.741 201.322 504.016 208.155C593.059 228.938 647.439 196.337 738.093 208.155C821.655 219.048 866.749 236.387 947.268 261.35C1037.72 289.392 1091.86 299.837 1174.37 346.463C1225.17 375.168 1248.67 399.187 1296.89 432.082C1340.16 461.606 1362.21 481.981 1408.45 506.556C1457.7 532.733 1485.99 550.447 1540.93 559.752C1584.08 567.06 1609.22 559.752 1652.98 559.752C1680.21 559.752 1695.48 559.752 1722.71 559.752;

            M1 54.1628C58.1815 54.1628 98.1104 40.7014 137.422 34.1628C186.5 26 249 25.9996 287.5 54.1633C311.767 71.9156 375 154.5 375 154.5C375 154.5 435.665 246.88 458 267C518.5 321.5 539 328 628.5 328C712.769 328 755.2 267 839.5 267C951.5 267 956.492 297.374 1039 344C1089.8 372.706 1196.91 405.962 1247 376C1300.5 344 1362.95 322.316 1415 328C1561.5 344 1601.5 480.5 1601.5 480.5C1601.5 480.5 1620.43 557.992 1652.98 599.75C1671.5 623.5 1695.48 639.75 1722.71 639.75;

            M1 33.1612C41.5 15.4999 54.0775 12.8386 82 6.9999C166.255 -10.6181 235.58 14.5002 267.5 34.1617C299.42 53.8232 341 143.498 341 143.498C341 143.498 398.256 244.33 418 266.998C458.5 313.498 543.141 358.009 608.5 347.998C664 339.498 735.556 254.73 819.5 246.998C895.5 239.998 956.492 257.373 1039 303.999C1089.8 332.704 1154.19 360.852 1207 335.999C1275 303.999 1342.95 302.314 1395 307.998C1541.5 323.999 1567.5 462.498 1567.5 462.498C1567.5 462.498 1586.16 534.099 1612.98 579.749C1629 607 1695.48 619.749 1722.71 619.749;

            M1 94.1641C58.1815 94.1641 90.6813 87.0449 147.422 94.1641C232.786 104.874 275.038 136.091 357.096 162.052C385.763 171.121 430.556 185.103 430.556 185.103C430.556 185.103 474.741 201.322 504.016 208.155C593.059 228.938 647.439 196.337 738.093 208.155C821.655 219.048 866.749 236.387 947.268 261.35C1037.72 289.392 1091.86 299.837 1174.37 346.463C1225.17 375.168 1248.67 399.187 1296.89 432.082C1340.16 461.606 1362.21 481.981 1408.45 506.556C1457.7 532.733 1485.99 550.447 1540.93 559.752C1584.08 567.06 1609.22 559.752 1652.98 559.752C1680.21 559.752 1695.48 559.752 1722.71 559.752;
            "
          />
        </path>
      </svg>

      <svg
        style={{ top: '5%', opacity: 0.1 }}
        width="1722"
        height="474"
        viewBox="0 0 1722 474"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.secondary} strokeWidth="2">
          <animate
            attributeName="d"
            dur="7000ms"
            repeatCount="indefinite"
            values="M0 4.16406C57.1815 4.16406 83.5 20.5 116.422 34.1641C149.344 47.8281 244.038 76.091 326.096 102.052C354.763 111.121 399.556 125.103 399.556 125.103C399.556 125.103 443.741 141.322 473.016 148.155C562.059 168.938 618 148.155 707.093 148.155C764 148.155 834.536 158.2 916.268 201.35C998 244.5 1048 275 1113 275C1178 275 1231.5 288 1266.5 309.5C1301.5 331 1331.21 361.981 1377.45 386.556C1426.7 412.733 1451.5 422.5 1509.93 439.752C1553.08 447.06 1573.1 422.651 1616 414C1644.52 408.248 1694.48 439.752 1721.71 439.752;

            M0 4.16408C57.1815 4.16408 89.6813 -2.9551 146.422 4.16408C231.786 14.8745 274.038 46.091 356.096 72.0517C384.763 81.1212 429.556 95.1031 429.556 95.1031C429.556 95.1031 473.741 111.322 503.016 118.155C592.059 138.938 646.439 106.337 737.093 118.155C820.655 129.048 865.749 146.387 946.268 171.35C1036.72 199.392 1090.86 209.837 1173.37 256.463C1224.17 285.168 1247.67 309.187 1295.89 342.082C1339.16 371.606 1361.21 391.981 1407.45 416.556C1456.7 442.733 1484.99 460.447 1539.93 469.752C1583.08 477.06 1608.22 469.752 1651.98 469.752C1679.21 469.752 1694.48 469.752 1721.71 469.752;

            M0 4.16406C57.1815 4.16406 83.5 20.5 116.422 34.1641C149.344 47.8281 244.038 76.091 326.096 102.052C354.763 111.121 399.556 125.103 399.556 125.103C399.556 125.103 443.741 141.322 473.016 148.155C562.059 168.938 618 148.155 707.093 148.155C764 148.155 834.536 158.2 916.268 201.35C998 244.5 1048 275 1113 275C1178 275 1231.5 288 1266.5 309.5C1301.5 331 1331.21 361.981 1377.45 386.556C1426.7 412.733 1451.5 422.5 1509.93 439.752C1553.08 447.06 1573.1 422.651 1616 414C1644.52 408.248 1694.48 439.752 1721.71 439.752;
            "
          />
        </path>
      </svg>

      <svg
        style={{ top: '20%' }}
        width="1721"
        height="491"
        viewBox="0 0 1721 491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.accent} strokeWidth="2">
          <animate
            attributeName="d"
            dur="13000ms"
            repeatCount="indefinite"
            values="M0 25.34C41.1773 15.5941 63.1907 2.37888 105.441 0.384163C158.277 -2.11033 188.688 7.69659 238.604 25.34C279.153 39.6727 297.127 58.8966 337.114 74.7526C472.793 128.553 565.321 80.5612 709.375 103.202C837.127 123.281 911.694 130.159 1032.13 177.571C1099.06 203.917 1135.22 222.767 1197.47 258.927C1257.5 293.791 1283.6 325.9 1344.99 358.251C1403.82 389.25 1439.03 403.45 1502.91 421.639C1549.97 435.041 1576.94 442.369 1625.67 446.595C1662.65 449.802 1683.74 449.802 1720.72 446.595;

            M0 25.34C40 43.5 25 38.5 62.5 49.5C130.5 69.4467 134.74 80.3498 198.604 65.34C266 49.5 240.5 49.5 297.114 34.7526C483 -2.5 525.321 120.561 669.375 143.202C797.127 163.281 831.694 170.159 952.13 217.571C1019.06 243.917 1105.22 192.767 1167.47 228.927C1227.5 263.791 1270.98 294.863 1314.99 388.251C1359 481.639 1405.32 497.278 1472.91 481.639C1540.5 466 1540.5 466 1605.67 486.595C1670.84 507.19 1683.74 389.802 1720.72 386.595;

        M0 25.34C41.1773 15.5941 63.1907 2.37888 105.441 0.384163C158.277 -2.11033 188.688 7.69659 238.604 25.34C279.153 39.6727 297.127 58.8966 337.114 74.7526C472.793 128.553 565.321 80.5612 709.375 103.202C837.127 123.281 911.694 130.159 1032.13 177.571C1099.06 203.917 1135.22 222.767 1197.47 258.927C1257.5 293.791 1283.6 325.9 1344.99 358.251C1403.82 389.25 1439.03 403.45 1502.91 421.639C1549.97 435.041 1576.94 442.369 1625.67 446.595C1662.65 449.802 1683.74 449.802 1720.72 446.595;
              "
          />
        </path>
      </svg>
      <svg
        style={{ top: '40%' }}
        width="1729"
        height="400"
        viewBox="0 0 1729 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.disabled} strokeWidth="1">
          <animate
            attributeName="d"
            dur="16000ms"
            repeatCount="indefinite"
            values="M1 1C71.8046 20.509 109.926 38.5124 182.307 50.956C306.875 72.3716 379.689 45.3932 505.961 50.956C642.354 56.9647 721.662 49.727 854.09 82.9279C1019.14 124.307 1095.47 193.713 1248.67 267.765C1316.92 300.756 1351.53 327.873 1422.98 353.19C1491.53 377.476 1531.88 388.97 1604.29 395.653C1652.65 400.116 1680.29 400.116 1728.66 395.653;

              M1 1C63 44.5 51 37 142.307 90.956C257.5 132.928 352.5 28.5 465.961 90.956C642 187.859 670.5 185.5 814.09 132.928C1047 90.956 1015.47 243.713 1168.67 317.765C1236.92 350.756 1290.5 333.19 1382.98 333.19C1505.5 333.19 1531.88 388.97 1604.29 395.653C1652.65 400.116 1680.29 400.116 1728.66 395.653;

              M1 1C71.8046 20.509 109.926 38.5124 182.307 50.956C306.875 72.3716 379.689 45.3932 505.961 50.956C642.354 56.9647 721.662 49.727 854.09 82.9279C1019.14 124.307 1095.47 193.713 1248.67 267.765C1316.92 300.756 1351.53 327.873 1422.98 353.19C1491.53 377.476 1531.88 388.97 1604.29 395.653C1652.65 400.116 1680.29 400.116 1728.66 395.653;
              "
          />
        </path>
      </svg>
      <svg
        style={{ top: '50%' }}
        width="1714"
        height="297"
        viewBox="0 0 1714 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.disabled} strokeWidth="1">
          <animate
            attributeName="d"
            dur="11000ms"
            repeatCount="indefinite"
            values="M1 1C94.5241 14.4415 146.149 30.1392 240.483 35.4191C362.007 42.2207 429.953 18.9636 551.662 17.9601C694.342 16.7838 778.869 -1.87369 916.613 35.4191C1020.52 63.5517 1069.46 105.236 1167.55 149.65C1256.53 189.942 1302.34 223.363 1395.58 252.409C1467.5 274.812 1509.26 285.661 1584.28 292.315C1639.67 297.228 1671.28 297.228 1726.67 292.315;

              M1 0.541C94.5241 13.9825 168.966 60.7292 280.483 104.96C392 149.191 489.291 180.003 611 179C753.68 177.824 797 59 956.613 34.9601C1103 34.9601 1156.5 84 1207.55 149.191C1263 220 1342.34 252.904 1435.58 281.95C1517 302 1549 291.856 1624.28 291.856C1679.67 296.769 1671.28 296.769 1726.67 291.856;

              M1 1C94.5241 14.4415 146.149 30.1392 240.483 35.4191C362.007 42.2207 429.953 18.9636 551.662 17.9601C694.342 16.7838 778.869 -1.87369 916.613 35.4191C1020.52 63.5517 1069.46 105.236 1167.55 149.65C1256.53 189.942 1302.34 223.363 1395.58 252.409C1467.5 274.812 1509.26 285.661 1584.28 292.315C1639.67 297.228 1671.28 297.228 1726.67 292.315;
              "
          />
        </path>
      </svg>

      <svg
        style={{ top: '55%' }}
        width="1727"
        height="297"
        viewBox="0 0 1727 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.disabled} strokeWidth="4">
          <animate
            attributeName="d"
            dur="14000ms"
            repeatCount="indefinite"
            values="M1 1C94.5241 14.4415 146.149 30.1392 240.483 35.4191C362.007 42.2207 429.953 18.9636 551.662 17.9601C694.342 16.7838 778.869 -1.87369 916.613 35.4191C1020.52 63.5517 1069.46 105.236 1167.55 149.65C1256.53 189.942 1302.34 223.363 1395.58 252.409C1467.5 274.812 1509.26 285.661 1584.28 292.315C1639.67 297.228 1671.28 297.228 1726.67 292.315;

              M1 0.999985C94.5241 14.4415 168.966 61.1882 280.483 105.419C392 149.65 489.291 180.462 611 179.459C753.68 178.283 797 59.459 956.613 35.4191C1103 35.4191 1156.5 84.459 1207.55 149.65C1263 220.459 1342.34 253.363 1435.58 282.409C1517 302.459 1549 292.315 1624.28 292.315C1679.67 297.228 1671.28 297.228 1726.67 292.315;

              M1 1C94.5241 14.4415 168.966 21.1882 280.483 65.4191C392 109.65 489.291 140.462 611 139.459C753.68 138.283 837 59.459 996.613 35.4191C1143 35.4191 1184.31 96.1995 1247.55 149.65C1322.5 213 1342.34 213.363 1435.58 242.409C1517 262.459 1549 252.315 1624.28 252.315C1668 252.315 1671.28 247.228 1726.67 242.315;

              M1 1C94.5241 14.4415 146.149 30.1392 240.483 35.4191C362.007 42.2207 429.953 18.9636 551.662 17.9601C694.342 16.7838 778.869 -1.87369 916.613 35.4191C1020.52 63.5517 1069.46 105.236 1167.55 149.65C1256.53 189.942 1302.34 223.363 1395.58 252.409C1467.5 274.812 1509.26 285.661 1584.28 292.315C1639.67 297.228 1671.28 297.228 1726.67 292.315;
              "
          />
        </path>
      </svg>
      <svg
        style={{ top: '50%' }}
        width="1729"
        height="369"
        viewBox="0 0 1729 369"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.text.disabled} strokeWidth="2">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M1 368C28.4288 337.319 48.748 323.802 71.2358 289.438C104.992 237.853 93.3692 194.207 125.532 141.642C242.371 -49.3161 461.651 16.9565 687.418 2.68507C845.684 -7.31932 968.128 28.6873 1087.5 71.9309C1229.64 123.423 1367.43 185.177 1556.15 191.726C1623.61 194.067 1661.54 194.067 1729 191.726;
              
             M0 368C43.5 368 87.748 323.802 110.236 289.438C143.992 237.853 132.369 194.207 164.532 141.642C281.371 -49.3161 500.651 16.9565 726.418 2.68507C884.684 -7.31932 1007.13 28.6873 1126.5 71.9309C1268.64 123.423 1415.5 141.642 1595.15 191.726C1664 231.726 1660.54 234.067 1728 231.726;

             M1 354C47.5 324.5 115 301 151.236 275.438C205.532 237.136 173.369 180.207 205.532 127.642C322.371 -63.3161 557.5 9.00001 767.418 48.6851C923.5 78.1925 1027.5 117.485 1167.5 97.9309C1346 73 1456.5 127.642 1636.15 177.726C1711.5 208 1674 192 1729 217.726;

              M1 368C28.4288 337.319 48.748 323.802 71.2358 289.438C104.992 237.853 93.3692 194.207 125.532 141.642C242.371 -49.3161 461.651 16.9565 687.418 2.68507C845.684 -7.31932 968.128 28.6873 1087.5 71.9309C1229.64 123.423 1367.43 185.177 1556.15 191.726C1623.61 194.067 1661.54 194.067 1729 191.726;"
          />
        </path>
      </svg>
      <svg
        style={{ top: '50%' }}
        width="1730"
        height="400"
        viewBox="0 0 1730 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke={theme.palette.accent} strokeWidth="2">
          <animate
            attributeName="d"
            dur="8  000ms"
            repeatCount="indefinite"
            values="M1 399C28.4288 365.728 48.7479 351.069 71.2358 313.802C104.992 257.859 93.3692 210.527 125.532 153.522C242.371 -53.5663 461.651 18.3044 687.418 2.8274C1034.14 -20.941 1208.94 194.77 1556.15 207.836C1623.61 210.375 1661.54 210.375 1729 207.836;
              
           M1 379C58 356.5 79.5978 323.695 111.236 293.802C165.532 242.5 171.691 155.003 205.532 113.522C363 -79.5 524 71.5 727.418 22.8275C1065.41 -58.0447 1302.5 101.5 1596.15 187.836C1660.92 206.878 1661.54 190.375 1729 187.836;


              M1 399C28.4288 365.728 48.7479 351.069 71.2358 313.802C104.992 257.859 93.3692 210.527 125.532 153.522C242.371 -53.5663 461.651 18.3044 687.418 2.8274C1034.14 -20.941 1208.94 194.77 1556.15 207.836C1623.61 210.375 1661.54 210.375 1729 207.836;"
          />
        </path>
      </svg>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 'auto',
    ...getBreakpointsStylesByArray(theme, {
      width: ['150%', '100%', '150%', '100%'],
    }),
  },
}))
