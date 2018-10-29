const config = require('../config/dev.env')
const api = config.ADMIN_BASE_API;
module.exports = {
    getTree: api + '/corp/loadCorpDeptTree', // 加载公司部门树
    creatApart: api + "/corp/saveCorpDept", // 创建部门
    delApart: api + "/corp/deleteCorpDept", // 删除部门
    formWecode: api + "/employee/updateInviteEmployee", // 生成邀请二维码
    isAddUserAvail: api + "/employee/checkEeNum", // 查询是否可以添加员工
    getUsers: api + "/employee/getEmployeeListByPage", // 分页查询员工
    moveApart: api + "/corp/updateDeptOrder", // 移动部门
    modifyApart: api + "/modifyApart", // 修改部门
    processUser: api + '/employee/updateEmployeeListStatus', // 批量停用启用删除员工
    addUser: api + "/employee/saveEmployeeData", //  添加员工
    modifyUserDetail: api + "/employee/updateEmployeeData", // 修改员工详情
    modifyUserRole: api + "/employee/updateEmployeeAuth", // 修改员工角色
    userRightsList: api + "/employee/queryEmployeeRoleList", // 员工权限列表
    userDetail: api + "/employee/getEmployeeEditByEeId", // 查询员工详情
    setTopUser: api + "/employee/updateSetTopEmployee", // 置顶用户
    cancelTopUser: api + "/employee/updateCancelTopEmployee", // 取消置顶用户
    setUserZuoxi: api + "/employee/addEmployySeat", // 员工分配坐席
    addRights: api + "/auth/saveOrUpdateAuthItem", // 添加权限
    updateRole: api + "/xkdata-web/auth/saveOrUpdateAuthRole", // 保存或更新角色
    addMultiRights: api + "/auth/saveOrUpdateAuthRoleItem", // 根据角色添加多个权限
    createCompany: api + "/corp/saveCorpCreateApply", // 创建公司
    enterCompany: api + "/corp/saveloginCompany", // 进入公司
    getRightsList: api + "/corp/queryCorpPackRoleList", // 查询公司套餐的权限列表
    searchOption: api + "/tconfig/queryTItemValueByPager", // 分页查询系统字典明细表
    zuoxiList: api + "/seat/getSeatUnassignedTotal", // 获取坐席列表
    unbindUser: api + "/employee/updateInviteEmployUnBind", // 解绑
  }
  