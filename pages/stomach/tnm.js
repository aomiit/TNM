var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["TX", "T0", "Tis", "T1a", "T1b", "T2", "T3", "T4a", "T4b"],
        "N": ["NX", "N0", "N1", "N2", "N3a", "N3b"]
      },
      
      "Table": {
        "Tis_N0_M0": "0",        
        "T1_N0_M0": "IA",
        "T1_N1_M0": "IB",
        "T2_N0_M0": "IB",
        "T1_N2_M0": "IIA",
        "T2_N1_M0": "IIA",
        "T3_N0_M0": "IIA",
        "T1_N3a_M0": "IIB",
        "T2_N2_M0": "IIB",
        "T3_N1_M0": "IIB",
        "T4a_N0_M0": "IIB",

        "T2_N3a_M0": "IIIA",
        "T3_N2_M0": "IIIA",
        "T4a_N1_M0": "IIIA",
        "T4a_N2_M0": "IIIA",
        "T4b_N0_M0": "IIIA",

        "T1_N3b_M0": "IIIB",
        "T2_N3b_M0": "IIIB",
        "T3_N3a_M0": "IIIB",
        "T4a_N3a_M0": "IIIB",
        "T4b_N1_M0": "IIIB",
        "T4b_N2_M0": "IIIB",

        "T3_N3b_M0": "IIIC",
        "T4a_N3b_M0": "IIIC",
        "T4b_N3a_M0": "IIIC",
        "T4b_N3b_M0": "IIIC",

         "AnyT_AnyN_M1": "IV"
      },
      "M": {
        "M0":"无远处转移",
        "M1":"有远处转移"    
      },
      "T": {
        "TX":"原发肿瘤无法评估",
        "T0":"未发现肿瘤",
        "Tis":"高度异型增生，局限于上皮内，未侵犯固有层",
        "T1a":"肿瘤侵及固有层或黏膜肌层",
        "T1b": "肿瘤侵及黏膜下层",
        "T2":"肿瘤侵及固有肌层",
        "T3":"肿瘤侵及至浆膜下结缔组织，无内脏腹膜或邻近结构的侵犯",
        "T4a":"肿瘤穿透浆膜层(腹膜脏层)，未侵犯邻近结构",
        "T4b": "肿瘤侵及邻近结构和器官（脾脏，横结肠，肝脏,横隔,小肠，胰腺,腹壁,腹膜后,肾上腺, 肾脏）"
      },
      "N": {
        "NX":"无法评估区域淋巴结",
        "N0":"无区域淋巴结转移",
        "N1": "1-2个区域淋巴结转移",
        "N2": "3-6个区域淋巴结转移",
        "N3a": "7-15个区域淋巴结转移",
        "N3b": "16个及16个以上区域淋巴结转移"
      }
    }
  }
]
 
module.exports ={
  tnm: tnmlist
}
