/* ============================================================
   Y25 85 12CK 时序数据表  —— 这是唯一需要维护的数据文件
   格式与原来的 Y25_85.json 完全一致：
     以 //频率Hz 开头（HSR 写成 //HSR 120Hz）
     每段三行：Vtotal= / 充电时间(charge time)= / CK Duty(正脉宽)=
   单位可写 us / H，也可不写；Tab、空格、空行、顺序都不影响。
   新增一个频率：复制一段，改标题里的频率和三行数值，保存后刷新页面。
   保存编码请用 UTF-8。
   ============================================================ */
window.TIMING_RAW = `
//60Hz
Vtotal				   	=2250
充电时间(charge time)		=4us
CK Duty(正脉宽)		   	=5H

//120Hz
Vtotal			   		=2250
充电时间(charge time)		=2us
CK Duty(正脉宽)		   	=5.5H

//HSR 120Hz
Vtotal				   	=2250
充电时间(charge time)		=3us
CK Duty(正脉宽)		   	=5.5H

//132Hz
Vtotal				   	=2250
充电时间(charge time)		=1.9us
CK Duty(正脉宽)		   	=5.5H

//144Hz
Vtotal				   	=2250
充电时间(charge time)		=1.8us
CK Duty(正脉宽)		   	=5.5H

//HSR 144Hz
Vtotal				   	=1125
充电时间(charge time)		=2.3us
CK Duty(正脉宽)		   	=5.5H

//150Hz
Vtotal				   	=2250
充电时间(charge time)		=1.3us
CK Duty(正脉宽)		   	=5.5H

//165Hz
Vtotal				   	=2250
充电时间(charge time)		=1.0us
CK Duty(正脉宽)			   =5.5H

//HSR 165Hz
Vtotal			   		=2250
充电时间(charge time)		=2.1us
CK Duty(正脉宽)		   	=5.5H

//170Hz
Vtotal				   	=2250
充电时间(charge time)		=1.0us
CK Duty(正脉宽)		   	=5.5H

//180Hz
Vtotal				   	=2216
充电时间(charge time)		=1.0us
CK Duty(正脉宽)		   	=5.5H

//HSR 240Hz
Vtotal				   	=2250
充电时间(charge time)		=1.8us
CK Duty(正脉宽)			   =5.8H

//HSR 265Hz
Vtotal				   	=2250
充电时间(charge time)		=1.5us
CK Duty(正脉宽)		   	=5.8H

//HSR 288Hz
Vtotal			   		=2250
充电时间(charge time)		=1.3us
CK Duty(正脉宽)		   	=5.8H

//HSR 300Hz
Vtotal				   	=2250
充电时间(charge time)		=1.0us
CK Duty(正脉宽)			   =5.8H

//HSR 330Hz
Vtotal				   	=2250
充电时间(charge time)		=0.8us
CK Duty(正脉宽)		   	=5.8H

//HSR 360Hz
Vtotal			   		=2216
充电时间(charge time)		=0.8us
CK Duty(正脉宽)		   	=5.8H
`;
