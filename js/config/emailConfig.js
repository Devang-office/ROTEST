export const emailConfig = {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    templates: {
        contact: process.env.TEMPLATE_ID,
        demo: process.env.TEMPLATE_ID,    // Using the same template for demo
        exchange: process.env.TEMPLATE_ID  // Using the same template for exchange
    }
};
