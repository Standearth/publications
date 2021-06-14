PHONY: github pudding

github:
	rm -rf docs/bc-subsidies
	cp -r ssr docs/bc-subsidies
	git add -A
	git commit -m "update github pages"
	git push

# aws-sync:
# 	aws s3 sync ssr s3://pudding.cool/year/month/name --delete --cache-control 'max-age=31536000'

# aws-cache:
# 	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths '/year/month/name*'	

# pudding: aws-sync aws-cache