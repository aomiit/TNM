var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["TX", "T0","Tis","Ta", "T1a", "T1b", "T2", "T3", "T4"],
        "N": ["NX", "N0", "N1", "N2", "N3"]
      },
    
      "Table": {
        "Tis_N0_M0": "0is",
        "Ta_N0_M0": "0a",
        "T1a_N0_M0": "Ⅰ",  
        "T1b_N0_M0": "ⅡA",  
        "T2_N0_M0": "ⅡA", 
        "T3_N0_M0": "ⅡB", 

        "T1a_N1_M0": "ⅢA",
        "T1b_N1_M0": "ⅢA",
        "T2_N1_M0": "ⅢA",
        "T3_N1_M0": "ⅢA",

        "T1a_N2_M0": "ⅢB",
        "T1b_N2_M0": "ⅢB",
        "T2_N2_M0": "ⅢB",
        "T3_N2_M0": "ⅢB",

        "T4_AnyN_M0": "Ⅳ",
        "AnyT_N3_M0": "Ⅳ",        
    
        "AnyT_AnyN_M1": "Ⅳ"
      },
      "M": {
        "M0":"无远处转移",
        "M1":"有远处转移"
      },

      "T": {
        "TX":"原发肿瘤无法评估",
        "T0":"无原发肿瘤证据",
        "Tis": "原位癌（阴茎上皮内瘤变PeIN）",
        "Ta": "非浸润性局限性鳞状细胞癌",
        "T1a": "龟头：肿瘤侵及固有层；包皮：肿瘤侵及固有层，或者阴囊筋膜,肿瘤无淋巴血管及神经侵犯，非低分化",
        "T1b": "龟头：肿瘤侵及固有层；包皮：肿瘤侵及固有层，或者阴囊筋膜,肿瘤存在淋巴血管及神经侵犯，或者低分化（3 级或者肉瘤样）",     
        "T2":"肿瘤侵及尿道海绵体（龟头或者腹侧轴）,有或无尿道浸润",       
        "T3": "肿瘤侵及阴茎海绵体（包括白膜），有或无尿道浸润", 
        "T4": "肿瘤侵及邻近结构，如阴囊、前列腺、耻骨等"
      },
      "N": {
        "NX":"无法评估区域淋巴结",
        "N0":"无区域淋巴结转移",       
        "N1": "≤2 个单侧腹股沟淋巴结转移,无 ENE(淋巴结外侵犯)",
        "N2": "≥3 个单侧腹股沟淋巴结转移，或者双侧腹股沟淋巴结转移",
        "N3": "ENE（淋巴结外侵犯），或者盆腔淋巴结转移" 
      }
    }
  }
]
 
module.exports ={
  tnm: tnmlist
}

