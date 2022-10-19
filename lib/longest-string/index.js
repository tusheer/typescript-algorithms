"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getLongestString = (strings) => {
    let longest = '';
    for (let i = 0; i < strings.length; i++) {
        if (longest.length < strings[i].length) {
            longest = strings[i];
        }
    }
    return longest;
};
exports.default = getLongestString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmFuZG9tLXByb2JsZW0vbG9uZ2VzdC1zdHJpbmcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FBaUIsRUFBRSxFQUFFO0lBQzNDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0o7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixrQkFBZSxnQkFBZ0IsQ0FBQyJ9