import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from 'midwayjs-cool-core';
import { Column, Index } from 'typeorm';

/**
 * 角色
 */
@EntityModel('admin_sys_role')
export class AdminSysRoleEntity extends BaseEntity {

    @Column({ comment: '用户ID' })
    userId: string;

    @Index({ unique: true })
    @Column({ comment: '名称' })
    name: string;

    @Index({ unique: true })
    @Column({ comment: '角色标签', nullable: true, length: 50 })
    label: string;

    @Column({ comment: '备注', nullable: true })
    remark: string;

}