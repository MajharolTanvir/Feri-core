-- AddForeignKey
ALTER TABLE "TagsConnection" ADD CONSTRAINT "TagsConnection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
