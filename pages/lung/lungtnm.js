var lungtnmlist = [
  {
    "lung8": {
      "orderedKeys": {
        "M": ["M0", "M1a", "M1b", "M1c"],
        "T": ["TX", "T0", "Tis","T1mi", "T1a", "T1b", "T1c", "T2a", "T2b", "T3", "T4"],
        "N": ["NX","N0", "N1", "N2", "N3"]
      },
      "Table": {
        "TX_N0_M0": "隐匿癌",
        "Tis_N0_M0": "0",

        "T1mi_N0_M0": "IA1",
        "T1a_N0_M0": "IA1",
        "T1a_N1_M0": "IIB",
        "T1a_N2_M0": "IIIA",
        "T1a_N3_M0": "IIIB",
  
        "T1b_N0_M0": "IA2",
        "T1b_N1_M0": "IIB",
        "T1b_N2_M0": "IIIA",
        "T1b_N3_M0": "IIIB",

        "T1c_N0_M0": "IA3",
        "T1c_N1_M0": "IIB",
        "T1c_N2_M0": "IIIA",
        "T1c_N3_M0": "IIIB",

        "T2a_N0_M0": "IB",
        "T2a_N1_M0": "IIB",
        "T2a_N2_M0": "IIIA",
        "T2a_N3_M0": "IIIB",

        "T2b_N0_M0": "IIA",
        "T2b_N1_M0": "IIB",
        "T2b_N2_M0": "IIIA",
        "T2b_N3_M0": "IIIB",

        "T3_N0_M0": "IIB",
        "T3_N1_M0": "IIIA",
        "T3_N2_M0": "IIIB",
        "T3_N3_M0": "IIIC",

        "T4_N0_M0": "IIIA",
        "T4_N1_M0": "IIIA",
        "T4_N2_M0": "IIIB",
        "T4_N3_M0": "IIIC",

        "M1a": "IVA",
        "M1b": "IVA",
        "M1c": "IVB",
      },
      "M": {
        "M0":"无远处转移",
        "M1a":"原发肿瘤对侧肺叶内有孤立的肿瘤结节,胸膜播散(胸膜结节或恶性胸腔积液或心包积液)",
        "M1b":"远处单个器官单发转移(包括单个非区域淋巴结的转移)",
        "M1c":"多个器官或单个器官多处转移"        
      },
      "T": {
        "TX":"原发肿瘤无法评估，或通过痰细胞学或支气管灌洗发现癌细胞，但影像学及支气管镜无法发现",
        "T0":"无原发肿瘤证据",
        "Tis":"原位癌,原位鳞状细胞癌,原位腺癌(纯贴壁生长，肿瘤最大径≤3cm)",
        "T1mi":"微浸润性腺癌：肿瘤最大径≤3cm，以贴壁为主以及浸润灶最大径≤5mm，周围包绕肺组织或脏层胸膜，支气管镜见肿瘤侵犯未超出叶支气管(未侵及主支气管)",
        "T1a":"原发肿瘤最大径≤1cm，局限于肺和脏层胸膜内，未累及主支气管；肿瘤浅表、任何大小、侵犯局限于支气管壁的，可延长至近主支气管，也归类于T1a，但是该类肿瘤罕见",
        "T1b":"原发肿瘤最大径>1cm，≤2cm，周围包绕肺组织或脏层胸膜，支气管镜见肿瘤侵犯未超出叶支气管(未侵及主支气管)",
        "T1c":"原发肿瘤最大径>2cm，≤3cm，周围包绕肺组织或脏层胸膜，支气管镜见肿瘤侵犯未超出叶支气管(未侵及主支气管)",
        "T2a":"原发肿瘤最大径>3cm，≤4cm；或具有以下任一种情况：侵及主支气管，但未侵及隆突；侵及脏层胸膜；阻塞性肺炎或者部分或全肺不张",
        "T2b":"肿瘤最大径>4cm，≤5cm；或具有以下任一种情况：累及主支气 管但未及距隆突；累及脏层胸膜；阻塞性肺炎或者部分或全肺不张",
        "T3":"肿瘤最大径>5cm，≤7cm,或侵及以下任何一个器官，包括：胸膜、胸壁、膈神经、心包；或者同一肺叶出现孤立性癌结节",
        "T4":"肿瘤最大径>7m，或者无论大小，侵及以下任何一个或多个器官，包括：纵膈、心脏、大血管、主气管、喉返神经、食管、椎体、膈肌；或者同侧不同肺叶出现孤立癌结节"
      },
      "N": {
        "NX":"淋巴结转移情况无法判断",
        "N0":"无区域淋巴结转移",
        "N1":"转移至同侧支气管周围淋巴结 和/或 同侧肺门及肺内淋巴结，包括原发肿瘤的直接侵犯",
        "N2":"转移到同侧纵隔和/或隆突下淋巴结",
        "N3":"转移到对侧纵隔、对侧肺门、同侧或对侧斜角肌或锁骨上淋巴结"
      }
    }
  }
]
 
module.exports ={
  lungtnm: lungtnmlist
}
