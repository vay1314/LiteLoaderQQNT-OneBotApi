export enum GroupNotifyTypes {
  INVITE_ME = 1,
  INVITED_JOIN = 4, // 有人接受了邀请入群
  JOIN_REQUEST_BY_INVITED = 5,  // 有人邀请了别人入群
  JOIN_REQUEST = 7,
  ADMIN_SET = 8,
  KICK_MEMBER = 9,
  MEMBER_EXIT = 11, // 主动退出
  ADMIN_UNSET = 12, // 我被取消管理员
  ADMIN_UNSET_OTHER = 13, // 其他人取消管理员
}

export interface GroupNotifies {
  doubt: boolean
  nextStartSeq: string
  notifies: GroupNotify[]
}

export enum GroupNotifyStatus {
  KINIT, // 初始化
  KUNHANDLE, // 未处理
  KAGREED, // 同意
  KREFUSED, // 拒绝
  KIGNORED // 忽略
}

export interface GroupNotify {
  time: number // 自己添加的字段，时间戳，毫秒, 用于判断收到短时间内收到重复的notify
  seq: string // 唯一标识符，转成数字再除以1000应该就是时间戳？
  type: GroupNotifyTypes
  status: GroupNotifyStatus
  group: { groupCode: string; groupName: string }
  user1: { uid: string; nickName: string } // 被设置管理员的人
  user2: { uid: string; nickName: string } // 操作者
  actionUser: { uid: string; nickName: string } //未知
  actionTime: string
  invitationExt: {
    srcType: number // 0?未知
    groupCode: string
    waitStatus: number
  }
  postscript: string // 加群用户填写的验证信息
  repeatSeqs: []
  warningTips: string
}

export enum GroupRequestOperateTypes {
  approve = 1,
  reject = 2,
}

export enum BuddyReqType {
  KMEINITIATOR,
  KPEERINITIATOR,
  KMEAGREED,
  KMEAGREEDANDADDED,
  KPEERAGREED,
  KPEERAGREEDANDADDED,
  KPEERREFUSED,
  KMEREFUSED,
  KMEIGNORED,
  KMEAGREEANYONE,
  KMESETQUESTION,
  KMEAGREEANDADDFAILED,
  KMSGINFO,
  KMEINITIATORWAITPEERCONFIRM
}

export interface FriendRequest {
  isInitiator?: boolean
  isDecide: boolean
  friendUid: string
  reqType: BuddyReqType
  reqTime: string // 时间戳,秒
  extWords: string // 申请人填写的验证消息
  isUnread: boolean
  friendNick: string
  sourceId: number
  groupCode: string
}

export interface FriendRequestNotify {
  data: {
    unreadNums: number
    buddyReqs: FriendRequest[]
  }
}

export enum MemberExtSourceType {
  DEFAULTTYPE = 0,
  TITLETYPE = 1,
  NEWGROUPTYPE = 2,
}

export interface GroupExtParam {
  groupCode: string
  seq: string
  beginUin: string
  dataTime: string
  uinList: Array<string>
  uinNum: string
  groupType: string
  richCardNameVer: string
  sourceType: MemberExtSourceType
  memberExtFilter: {
    memberLevelInfoUin: number
    memberLevelInfoPoint: number
    memberLevelInfoActiveDay: number
    memberLevelInfoLevel: number
    memberLevelInfoName: number
    levelName: number
    dataTime: number
    userShowFlag: number
    sysShowFlag: number
    timeToUpdate: number
    nickName: number
    specialTitle: number
    levelNameNew: number
    userShowFlagNew: number
    msgNeedField: number
    cmdUinFlagExt3Grocery: number
    memberIcon: number
    memberInfoSeq: number
  }
}