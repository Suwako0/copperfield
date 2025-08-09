// 饰品渲染Script
CuriosJSEvents.registerRenderer(event => {
    event.remove('kubejs:custom_dungeons_hairpin')
    event.register(
        'kubejs:custom_dungeons_hairpin',
        context => {
            let {
                stack,
                slotContext,
                matrixStack,
                renderTypeBuffer,
                light,
                limbSwing,
                limbSwingAmount,
                partialTicks,
                ageInTicks,
                netHeadYaw,
                headPitch
            } = context;
            // 获取模型
            let model = Client.itemRenderer.getModel(stack, null, null, 0);
            if (!model) return;
            let entity = slotContext.entity();
            if (!entity) return;
            matrixStack.pushPose();
            matrixStack.translate(-0.16, -0.25, -0.4);
            matrixStack.mulPose(new Quaternionf().rotationY(JavaMath.toRadians(90)));
            matrixStack.mulPose(new Quaternionf().rotationX(JavaMath.toRadians(180)));
            matrixStack.mulPose(new Quaternionf().rotationZ(JavaMath.toRadians(90)));
            matrixStack.scale(0.35, 0.35, 0.35);
            Client.itemRenderer.render(
                stack,
                'head',
                false,
                matrixStack,
                renderTypeBuffer,
                light,
                OverlayTexture.NO_OVERLAY,
                model
            );
            matrixStack.popPose();
        }
    );

    event.remove('kubejs:alfheim_hairpin')
    event.register(
        'kubejs:alfheim_hairpin',
        context => {
            let {
                stack,
                slotContext,
                matrixStack,
                renderTypeBuffer,
                light,
                limbSwing,
                limbSwingAmount,
                partialTicks,
                ageInTicks,
                netHeadYaw,
                headPitch
            } = context;
            // 获取模型
            let model = Client.itemRenderer.getModel(stack, null, null, 0);
            if (!model) return;
            let entity = slotContext.entity();
            if (!entity) return;
            matrixStack.pushPose();
            matrixStack.translate(-0.16, -0.25, -0.4);
            matrixStack.mulPose(new Quaternionf().rotationY(JavaMath.toRadians(90)));
            matrixStack.mulPose(new Quaternionf().rotationX(JavaMath.toRadians(180)));
            matrixStack.mulPose(new Quaternionf().rotationZ(JavaMath.toRadians(90)));
            matrixStack.scale(0.35, 0.35, 0.35);
            Client.itemRenderer.render(
                stack,
                'head',
                false,
                matrixStack,
                renderTypeBuffer,
                light,
                OverlayTexture.NO_OVERLAY,
                model
            );
            matrixStack.popPose();
        }
    );
});