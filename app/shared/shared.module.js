"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var name_list_service_1 = require("./name-list/name-list.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [name_list_service_1.NameListService]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [common_1.CommonModule, forms_1.FormsModule]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBRTdDLG1FQUFnRTtBQVNoRTtJQUFBO0lBT0EsQ0FBQztxQkFQWSxZQUFZO0lBQ2hCLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBTlUsWUFBWTtRQUp4QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUJBQVcsQ0FBQztTQUNyQyxDQUFDO09BQ1csWUFBWSxDQU94QjtJQUFELG1CQUFDOztDQVBELEFBT0MsSUFBQTtBQVBZLG9DQUFZIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4vbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=
