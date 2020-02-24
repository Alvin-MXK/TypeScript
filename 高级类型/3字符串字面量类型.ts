type T0 = '1'
let a: T0 = 1

type AssetType = "chick-in" | "chick-out";
function test(assetType: AssetType): any {
    if(assetType === 'chick-in'){
        // ...
    }else if(assetType === 'chick-out'){
        // ...
    }
}

test("chick-in");
test("chick-out");
test("chick")

// 数字字面量类型
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 1
}

// 枚举成员类型
enum CHASSIS_SIZE {
    SIZE_20 = 'SIZE_20',
    SIZE_20_T = 'SIZE_20_T',
    SIZE_40 = 'SIZE_40',
    SIZE_40_T = 'SIZE_40_T',
    SIZE_20_40_T = 'SIZE_20_40_T',
    SIZE_45 = 'SIZE_45',
    SIZE_40_45 = 'SIZE_40_45',
    SIZE_53 = 'SIZE_53',
}
let chassis_size_1: CHASSIS_SIZE = CHASSIS_SIZE.SIZE_20
let chassis_size_2: CHASSIS_SIZE = 'SIZE_20'