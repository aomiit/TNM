var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["TX", "T0", "Ta", "Tis", "T1", "T2", "T3", "T4"],
        "N": ["NX", "N0", "N1", "N2"]
      },

      "Table": {
        "Ta_N0_M0": "0a",  
        "Tis_N0_M0": "0is",  

        "T1_N0_M0": "Ⅰ",        
        "T2_N0_M0": "Ⅱ",

        "T1_N1_M0": "Ⅲ",
        "T2_N1_M0": "Ⅲ",

        "T3_N0_M0": "Ⅲ",
        "T3_N1_M0": "Ⅲ",
   
        "T4_N0_M0": "Ⅳ",      
        "T4_N1_M0": "Ⅳ",        
  
        "AnyT_N2_M0": "Ⅳ",
        "AnyT_AnyN_M1": "Ⅳ"
      },
      "M": {
        "M0": "无远处转移",
        "M1": "有远处转移" 
      },
      "T": {
        "TX": "原发肿瘤无法评估",
        "T0": "无原发肿瘤证据",
        "Ta": "非浸润性乳头状尿路上皮癌",
        "Tis": "原位癌",
        "T1": "肿瘤侵及上皮下结缔组织",
        "T2": "肿瘤侵及以下任何之一：尿道海绵体，尿道周围肌组织,前列腺实质",
        
        "T3": "肿瘤侵及以下任何之一：阴茎海绵体，阴道，前列腺周围脂肪组织",
      
        "T4": "肿瘤侵及邻近结构（如膀胱壁,直肠壁）"
      },
      "N": {
        "NX":"无法评估区域淋巴结",
        "N0":"无区域淋巴结转移",
        "N1": "真骨盆/腹股沟单个区域淋巴结转移（膀胱周围、闭孔、髂内/外、骶前淋巴结转移）",
        "N2": "真骨盆多个区域淋巴结转移（膀胱周围、闭孔、髂内/外、骶前淋巴结转移）"
      }
    }
  }
]
 
module.exports ={
  tnm: tnmlist
}

